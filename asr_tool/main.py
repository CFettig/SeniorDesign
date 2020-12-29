from flask import Blueprint, session, redirect, render_template, url_for, request
from flask_login import login_required, current_user
from . import db
from .models import Transcript

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@login_required
def profile():
    # posts = []  
    # for post in Transcript.query.filter_by(user_id=current_user.id):
    #     posts += post.serialize 
    posts = Transcript.query.filter_by(user_id=current_user.id)
    return render_template('profile.html', name=current_user.name, posts=posts)

@main.route('/practice', methods=['GET', 'POST'])
@login_required
def practice():
    if request.method=='POST':
        if 'actual_word' in request.form:
            return 'comparing ' + request.form.get('actual_word') + ' and ' + request.form.get('user_word')
        else:
            save_transcript(request.form.get('transcript'))
            return render_template('profile.html', name=current_user.name)
    else:
        return render_template('practice.html', user=current_user)

@main.route('/save_transcript')
@login_required
def save_transcript(user_text):
    new_transcript = Transcript(text=user_text, user_id=current_user.id)
    db.session.add(new_transcript)
    db.session.commit()
    # return render_template('profile.html', name=current_user.name)

if __name__ == '__main__':
    main.run()