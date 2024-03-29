from flask import Blueprint, session, redirect, render_template, url_for, request, flash
from flask import Response
from flask_login import login_required, current_user
import csv, io, requests as req
from datetime import datetime
from random import randint
from .extensions import db
from .models import *
from .phonetics import compare_words, get_phonemes
from .auth import role_required
from .mailing import send_email
from asr_tool.models import User

main = Blueprint('main', __name__)

#home page
@main.route('/')
def index():
    update_page('index')
    return render_template('index.html')

# Student profile. Displays past transcripts
@main.route('/profile', methods=['GET'])
# This means that the session must be logged in and must be associated with one of the roles
@role_required(roles=['student'])
def profile():
    update_page('profile')
    session['one_page'] = 'profile'

    posts = Transcript.query.filter_by(user_id=current_user.id)
    # This loop serves a purpose to remove all of the transcripts that are insufficient
    # For example, a transcript with no prompt or no text would be frequently posted to the profile page
    # This is so that they do not show up, and are automatically deleted
    for post in posts:
        if post.prompt == None or post.text.isspace() or post.text == "":
            deleteTranscript(post.id)
        else:
            pass

    # Sends all transcripts from current user id so that they are printed to the page
    return render_template('student_profile.html', posts=posts)

#Delete transcript
def deleteTranscript(transcriptid):

    post = Transcript.query.get_or_404(transcriptid)

    if session.get('transcript_id') == transcriptid:
        session.pop('transcript_id')

    # Check if transcript in question has practiced pairs and if so delete them first
    # The PracticedPair relation uses a foreign key from Transcript therefore it must be removed first
    if PracticedPair.query.filter_by(transcript_id=transcriptid).first():
        practicepairs = PracticedPair.query.filter_by(transcript_id=transcriptid).all()
        for practicepair in practicepairs:
            db.session.delete(practicepair)
        db.session.commit()

    # Delete the transcript and commit
    db.session.delete(post)
    db.session.commit()

    # return redirect(url_for('main.profile')

#Main practice room 
@main.route('/practice', methods=['GET', 'POST'])
@role_required(roles=['student'])
def practice():
    update_page('main_practice')

    #POST request comes when user enters pair of words to practice
    if request.method=='POST':
            actual, intended = request.form.get('actual_word'), request.form.get('user_word')
            return redirect(url_for('main.pronunciation', actual=actual.strip(), intended=intended.strip()))
    else:
        trans_id = session.get('transcript_id')

        #getting existing transcript
        if trans_id:
            transcript = Transcript.query.filter_by(id=trans_id).first()
            prompt = transcript.prompt
        
        #creating new transcript
        else:
            prompt = req.get("https://source.unsplash.com/random").url

            transcript = Transcript(user_id=current_user.id, prompt=prompt)
            db.session.add(transcript)
            db.session.commit()

            #adding new transcript as current transcript in session
            session['transcript_id'] = transcript.id

        return render_template('practice.html', user=current_user, transcript=transcript, prompt=prompt)

    # update_page('main_practice')

    # #POST request comes when user enters pair of words to practice
    # if request.method=='POST':
    #         actual, intended = request.form.get('actual_word'), request.form.get('user_word')
    #         return redirect(url_for('main.pronunciation', actual=actual, intended=intended))
    # else:

    #     transcript = Transcript.query.filter_by(id=session.get('transcript_id')).first()
    #     #if there is a current transcript, use transcript prompt
    #     if transcript:
    #         prompt = transcript.prompt

    #     #if creating new transcript, generate random prompt
    #     else: 
    #         prompt = req.get("https://source.unsplash.com/random").url
            
    #     return render_template('practice.html', user=current_user, transcript=transcript, prompt=prompt)

#generates new prompt for current transcript
@main.route('/practice/new_prompt', methods=['GET'])
@role_required(roles=['student'])
def new_prompt():
    trans_id = session.get('transcript_id')

    #only generates new prompt is there is a current transcript
    if trans_id:
        new_prompt = req.get("https://source.unsplash.com/random").url

        transcript = Transcript.query.filter_by(id=trans_id).first()
        transcript.prompt = new_prompt
        db.session.add(transcript)
        db.session.commit()

    return redirect(url_for('main.practice'))

@main.route('/practice_manual', methods=['GET'])
@role_required(roles=['student'])
def practice_manual():
    return render_template('practice_manual.html')

#individual sound practice room
@main.route('/practice/<sound>')
@role_required(roles=['teacher', 'student', 'admin'])
def practice_sound(sound):
    update_page('sound_practice')

    trans_id = session.get('transcript_id')
    if trans_id:
        transcript = Transcript.query.filter_by(id=trans_id).first()

        if sound not in transcript.practiced_sounds:
            transcript.practiced_sounds += sound + ':'

        db.session.add(transcript)
        db.session.commit()

    content = LessonContent.query.filter_by(sound=sound).first()
    if content:
        min_pairs = MinPair.query.filter_by(lesson_id=content.sound)

        return render_template('sound_practice.html', content=content, min_pairs=min_pairs)
    
    else:
        return "this lesson content has not been made"

#page of links to all sound lessons
@main.route('/all_lessons')
@role_required(roles=['admin'])
def all_lessons():
    sounds = db.session.query(LessonContent.sound)

    return render_template('all_lessons.html', sounds=sounds)    

#extracting sounds for user to practice
@main.route('/pronunciation/<actual>/<intended>')
@role_required(roles=['student'])
def pronunciation(actual, intended):
    try:
        difference = compare_words(actual, intended)

        #saving word pair to transcript
        pair = PracticedPair(transcript_id=session.get('transcript_id'), actual_word=actual, intended_word=intended)
        db.session.add(pair)
        db.session.commit()
        
        #getting sounds differing between two words
        #adds min_pair for using as link sound
        sounds = []
        audio_folder = None
        for item in compare_words(actual, intended):
            lesson_content = LessonContent.query.filter_by(sound=item).first()
            
            if lesson_content:
                audio_folder = lesson_content.audio_folder

            sounds.append((item, MinPair.query.filter_by(lesson_id=item, same=1).first(), audio_folder))
    
        return render_template('pronunciation.html', sounds=sounds)

    # one or both of the words was not in the dictionary
    except Exception as e:
        flash(str(e))    
        return redirect(url_for('main.practice'))


#saving transcript
@main.route('/save_transcript', methods=['POST'])
@role_required(roles=['student'])
def save_transcript():
    # Adding space after transcript so that words dont get concatenated
    user_text = request.form['transcript'] + " "
    # prompt = request.form['prompt']

    #getting current transcript id from session
    transcript_id = session.get('transcript_id')

    #adding text to an existing transcript
    if transcript_id:
        transcript = Transcript.query.filter_by(id=transcript_id).one()
        transcript.text += user_text
        db.session.add(transcript)
        db.session.commit()

    #creating a new transcript and setting the session id
    else:
        new_transcript = Transcript(text=user_text, user_id=current_user.id, id=transcript_id)
        db.session.add(new_transcript)
        db.session.commit()

        #adding new transcript as current transcript in session
        session['transcript_id'] = new_transcript.id
    
    return "transcript added"

#ending current practice room
@main.route('/end_practice', methods=['GET'])
@role_required(roles=['student'])
def end_practice():
    update_page('end_practice')

    #removing current transcript from session
    if session.get('transcript_id'):
        session.pop('transcript_id')
    
    user_info = UserInfo.query.filter_by(user_id=current_user.id).first()

    if not user_info:
        user_info = UserInfo(user_id=current_user.id, num_practice_sess=1)
        
    else:
        user_info.num_practice_sess += 1 

    db.session.add(user_info)
    db.session.commit()

    if (user_info.num_practice_sess == 1) or (user_info.num_practice_sess % 10 == 1):
        return redirect(url_for('main.get_rating'))
    elif (user_info.num_practice_sess == 4) or (user_info.num_practice_sess % 15 == 1):
        return redirect(url_for('main.get_feedback'))

    return redirect(url_for('main.profile'))

#email practice report to teacher
@main.route('/email_practice_report', methods=['POST'])
@role_required(roles=['student'])
def email_practice_report():
    recipient = request.form['recipient']
    trans_id = request.form['trans_id']
    
    transcript = Transcript.query.filter_by(id=trans_id).one()

    report = {
                'name': current_user.email, 
                'time': transcript.main_practice_time/60,
                'sounds': transcript.practiced_sounds
                }

    sent = send_email(recipient, 'SALUKISPEECH PRACTICE REPORT', 'practice_report.html', report=report)
    if sent:
        return 'success'
    else:
        return 'failure'


#saves site feedback from users
@main.route('/get_rating', methods=['GET', 'POST'])
@role_required(roles=['student', 'admin', 'researcher'])
def get_rating():
    if request.method=='POST':
        rating = request.form.get('rating')
        feedback = request.form.get('feedback')

        new_rating = Rating(rating=rating, feedback=feedback)

        db.session.add(new_rating)
        db.session.commit()

        return redirect(url_for('main.profile'))

    else:
        return render_template('rating.html')

@main.route('/get_feedback', methods=['GET', 'POST'])
@role_required(roles=['student', 'admin', 'researcher'])
def get_feedback():
    if request.method=='POST':
        easy_to_use = request.form.get('easy_to_use') 
        fun_to_use = request.form.get('fun_to_use')
        provides_feedback = request.form.get('provides_feedback')
        is_helpful = request.form.get('is_helpful')
        likes = request.form.get('likes')
        dislikes = request.form.get('dislikes')

        new_feedback = Feedback(easy_to_use=easy_to_use, 
                                fun_to_use=fun_to_use, 
                                provides_feedback=provides_feedback,
                                is_helpful=is_helpful,
                                likes=likes,
                                dislikes=dislikes)

        db.session.add(new_feedback)
        db.session.commit()

        return redirect(url_for('main.profile'))

    else:
        return render_template('feedback.html')
        
@main.route('/same_sounds', methods=['GET', 'POST'])
def same_sounds():
    word1 = request.form.get('word1')
    word2 = request.form.get('word2')
    
    if ''.join(get_phonemes(word1)) == ''.join(get_phonemes(word2)):
        return {'result': True}
    else:
        return {'result': False}

#method to update total time spent on page. does not account for inactivity
def update_page(page):
    last_page = session.get('last_page')
    
    if last_page != page:
        end_time = datetime.utcnow()

        if last_page == 'main_practice' or last_page == 'sound_practice':
            transcript_id = session.get('transcript_id')

            if transcript_id:
                transcript = Transcript.query.filter_by(id=transcript_id).one()

                time_delta = end_time - session.get('start_time')

                if last_page == 'main_practice':  
                    transcript.main_practice_time += time_delta.seconds + time_delta.microseconds*0.000001
                elif last_page == 'sound_practice':
                    transcript.sound_practice_time += time_delta.seconds + time_delta.microseconds*0.000001

                db.session.add(transcript)
                db.session.commit()

        session['start_time'] = end_time
        
    session['last_page'] = page

# if __name__ == '__main__':
#     main.run()