from flask import Blueprint, session, redirect, render_template, url_for, request, flash
from flask import Response
from flask_login import login_required, current_user
import csv, io, requests as req
from datetime import datetime
from random import randint
from .extensions import db
from .models import Transcript, LessonContent, MinPair, PracticedPair, User
from .phonetics import compare_words, get_phonemes
from .auth import role_required
from .mailing import send_email

main = Blueprint('main', __name__)

@main.route('/')
def index():
    update_page('index')
    return render_template('index.html')

@main.route('/profile')
@role_required(roles=['teacher', 'student'])
def profile():
    update_page('profile')
    session['one_page'] = 'profile'
    if current_user.role == 'student':
        posts = Transcript.query.filter_by(user_id=current_user.id)
        # return render_template('student_profile.html', name=current_user.name, posts=posts)
        return render_template('student_profile.html', posts=posts)
    else:
        return render_template('teacher_profile.html', name=current_user.name)

@main.route('/profile/delete/<int:transcriptid>')
@login_required
def deleteTranscript(transcriptid):

    post = Transcript.query.get_or_404(transcriptid)

    if session.get('transcript_id') == transcriptid:
        session.pop('transcript_id')

    db.session.delete(post)
    db.session.commit()

    return redirect('/profile')

@main.route('/practice', methods=['GET', 'POST'])
@role_required(roles=['student'])
def practice():
    update_page('main_practice')

    transcript = Transcript.query.filter_by(id=session.get('transcript_id')).first()

    if request.method=='POST':
            actual, intended = request.form.get('actual_word'), request.form.get('user_word')
            return redirect(url_for('main.pronunciation', actual=actual, intended=intended))
    else:
        if transcript:
            prompt = transcript.prompt
        else: 
            # prompt = "https://picsum.photos/" + str(randint(0, 5000))
            prompt = req.get("https://source.unsplash.com/random").url
            
        return render_template('practice.html', user=current_user, transcript=transcript, prompt=prompt)

@main.route('/practice/new_prompt', methods=['GET'])
@role_required(roles=['student'])
def new_prompt():
    prompt = req.get("https://source.unsplash.com/random").url
    
    transcript = Transcript.query.filter_by(id=session.get('transcript_id')).first()
    transcript.prompt = prompt
    
    db.session.add(transcript)
    db.session.commit()

    return redirect(url_for('main.practice'))

@main.route('/practice/<sound>')
@role_required(roles=['teacher', 'student', 'admin'])
def practice_sound(sound):
    update_page('sound_practice')

    transcript = Transcript.query.filter_by(id=session.get('transcript_id')).first()
    if sound not in transcript.practiced_sounds:
        transcript.practiced_sounds+= sound + ':'

    db.session.add(transcript)
    db.session.commit()

    content = LessonContent.query.filter_by(sound=sound).first()
    min_pairs = MinPair.query.filter_by(lesson_id=content.sound)

    return render_template('sound_practice.html', content=content, min_pairs=min_pairs)

@main.route('/pronunciation/<actual>/<intended>')
@role_required(roles=['student'])
def pronunciation(actual, intended):
    # session['one_page'] = 'choose_sound'
    pair = PracticedPair(transcript_id=session.get('transcript_id'), actual_word=actual, intended_word=intended)
    db.session.add(pair)
    db.session.commit()
    
    sounds = []
    
    for item in compare_words(actual, intended):
        sounds.append((item, MinPair.query.filter_by(lesson_id=item, same=1).first()))
    return render_template('pronunciation.html', sounds=sounds)

@main.route('/save_transcript', methods=['POST'])
@role_required(roles=['student'])
def save_transcript():
    user_text = request.form['transcript']
    prompt = request.form['prompt']
    transcript_id = session.get('transcript_id')

    #adding text to an existing transcript
    if transcript_id:
        transcript = Transcript.query.filter_by(id=transcript_id).one()
        transcript.text += user_text
        transcript.prompt = prompt
        db.session.add(transcript)
        db.session.commit()

    #creating a new transcript and setting the session id
    else:
        new_transcript = Transcript(text=user_text, user_id=current_user.id, id=transcript_id)
        db.session.add(new_transcript)
        db.session.commit()
        session['transcript_id'] = new_transcript.id
    
    return "transcript added"

@main.route('/end_practice', methods=['GET'])
@role_required(roles=['student'])
def end_practice():
    update_page('end_practice')
    if session.get('transcript_id'):
        session.pop('transcript_id')
    #should we redirect to transcript detail page instead?
    return redirect(url_for('main.profile'))

@main.route('/email_practice_report', methods=['POST'])
@role_required(roles=['student'])
def email_practice_report():
    recipient = request.form['recipient']
    trans_id = request.form['trans_id']

    #FIX THIS    
    transcript = Transcript.query.filter_by(id=trans_id).one()


    report = {
                'name': transcript.user_id, 
                'time': transcript.main_practice_time/60,
                'sounds': transcript.practiced_sounds
                }

    send_email(recipient, 'PRACTICE REPORT', 'practice_report.html', report=report)
    
    return 'success'

@main.route('/view_research_data', methods=['GET'])
@role_required(roles=['researcher'])
def view_research_data():
    data = {}
    pairs = {}
    transcripts = db.session.query(Transcript).filter(Transcript.user_id).all()

    for transcript in transcripts:
        if transcript.user_id in data:
            data[transcript.user_id].append(transcript)
        else:
            data[transcript.user_id] = [transcript]
            
        if transcript.practiced_pairs:
            pairs[transcript.id] = ''
            for pair in PracticedPair.query.filter(PracticedPair.transcript_id==transcript.id):
                pairs[transcript.id] += '|actual: ' + pair.actual_word + '|intended: ' + pair.intended_word
    return render_template('data_view.html', data=data, pairs=pairs)

@main.route('/download_research_data', methods=['GET'])
@role_required(roles=['researcher'])
def download_research_data():
    transcripts = db.session.query(Transcript).filter(User.id==Transcript.user_id).all()

    output = io.StringIO()

    writer = csv.writer(output, delimiter=";")
    writer.writerow(['user', 'date','text','practiced_sounds','main_practice_time','sound_practice_time', 'practiced pairs'])

    for transcript in transcripts:
        print('*'*30 + transcript.practiced_sounds)
        line =  str(transcript.id) + ';' + str(transcript.date) + ';' +transcript.text + ';' +str(transcript.practiced_sounds) + ';' + str(transcript.main_practice_time) + ';' + str(transcript.sound_practice_time)
            
        if transcript.practiced_pairs:
            for pair in PracticedPair.query.filter(PracticedPair.transcript_id==transcript.id):
                line += ',' + 'actual: ' + pair.actual_word + '  intended: ' + pair.intended_word

        writer.writerow([line])

    output.seek(0)

    return Response(output, mimetype="text/csv", headers={"Content-Disposition":"attachment;filename=practice_data.csv"})

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

if __name__ == '__main__':
    main.run()