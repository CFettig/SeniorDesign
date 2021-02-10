from flask import Blueprint, session, redirect, render_template, url_for, request, flash
from flask_login import login_required, current_user
from . import db
from .models import Transcript, LessonContent, MinPair
from .phonetics import compare_words
from .auth import role_required

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@role_required(roles=['teacher', 'student'])
def profile():
    if current_user.role == 'student':
        posts = Transcript.query.filter_by(user_id=current_user.id)
        return render_template('student_profile.html', name=current_user.name, posts=posts)
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
    if request.method=='POST':
            actual, intended = request.form.get('actual_word'), request.form.get('user_word')
            return redirect(url_for('main.pronunciation', actual=actual, intended=intended))
    else:
        # if not session.get('transcript_id'):
        #     session['transcript_id'] = 1
        transcript = Transcript.query.filter_by(id=session.get('transcript_id')).first()
        return render_template('practice.html', user=current_user, transcript=transcript)

@main.route('/practice/<sound>')
@role_required(roles=['teacher', 'student', 'admin'])
def practice_sound(sound):
    content = LessonContent.query.filter_by(sound=sound).first()
    min_pairs = MinPair.query.filter_by(lesson_id=content.sound)

    return render_template('sound_practice.html', content=content, min_pairs=min_pairs)

@main.route('/pronunciation/<actual>/<intended>')
@role_required(roles=['student'])
def pronunciation(actual, intended):
    # symbols = compare_words(actual, intended)
    sounds = []
    for item in compare_words(actual, intended):
        sounds.append((item, MinPair.query.filter_by(lesson_id=item, same=1).first()))
    return render_template('pronunciation.html', sounds=sounds)

@main.route('/save_transcript', methods=['POST'])
@role_required(roles=['student'])
def save_transcript():
    # user_text = request.args.get('transcript')
    user_text = request.form['transcript']
    print('&'*30 + user_text)
    transcript_id = session.get('transcript_id')

    #adding text to an existing transcript
    if transcript_id:
        transcript = Transcript.query.filter_by(id=transcript_id).one()
        print('*'*30 + transcript.text)
        transcript.text = user_text
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
    if session.get('transcript_id'):
        session.pop('transcript_id')
    #should we redirect to transcript detail page instead?
    return redirect(url_for('main.profile'))        

if __name__ == '__main__':
    main.run()