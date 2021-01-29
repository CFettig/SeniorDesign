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
    db.session.delete(post)
    db.session.commit()

    return redirect('/profile')

@main.route('/practice', methods=['GET', 'POST'])
@role_required(roles=['student'])
def practice():
    if request.method=='POST':
        if 'actual_word' in request.form:
            actual, intended = request.form.get('actual_word'), request.form.get('user_word')
            return redirect(url_for('main.pronunciation', actual=actual, intended=intended))
        else:
            save_transcript(request.form.get('transcript'))
            return redirect(url_for('main.profile'))
    else:
        return render_template('practice.html', user=current_user)

@main.route('/practice/<sound>')
@role_required(roles=['teacher', 'student', 'admin'])
def practice_sound(sound):
    content = LessonContent.query.filter_by(sound=sound).first()
    min_pairs = MinPair.query.filter_by(lesson_id=content.id)

    return render_template('sound_practice.html', content=content, min_pairs=min_pairs)

@main.route('/pronunciation/<actual>/<intended>')
@role_required(roles=['student'])
def pronunciation(actual, intended):
    sounds = compare_words(actual, intended)
    return render_template('pronunciation.html', sounds=sounds)

@main.route('/save_transcript')
@login_required
def save_transcript(user_text):
    new_transcript = Transcript(text=user_text, user_id=current_user.id)
    db.session.add(new_transcript)
    db.session.commit()            

if __name__ == '__main__':
    main.run()