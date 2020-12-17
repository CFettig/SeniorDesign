from flask import Blueprint, session, redirect, render_template, url_for
from flask_login import login_required, current_user
from . import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/profile')
@login_required
def profile():
    return render_template('profile.html', name=current_user.name)

@main.route('/practice')
@login_required
def practice():
    return render_template('practice.html', user=current_user)

if __name__ == '__main__':
    main.run()