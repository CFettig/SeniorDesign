from flask import Blueprint, session, redirect, render_template, url_for, request, flash, abort
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user
from functools import wraps
from . import db
from .models import User

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method=='POST':
        email = request.form.get('email')
        password = request.form.get('password')
        remember = True if request.form.get('remember') else False
    
        user = User.query.filter_by(email=email).first()

        if not user:
            flash('This user does not exist.') 
            return redirect(url_for('auth.login'))
    
        if not check_password_hash(user.serialize()['password'], password):
            flash('Password incorrect')
            return redirect(url_for('auth.login'))

        e = login_user(user, remember=remember)
         
        session['logged_in'] = True
        return redirect(url_for('main.profile'))

    else:
        return render_template('login.html')
    

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method=='POST': 
        email = request.form.get('email')
        name = request.form.get('name')
        password = request.form.get('password')
        consent = request.form.get('consent')
        role = request.form.get('role')
        
        if User.query.filter_by(email=email).first():
            flash('This email address is already associated with an existing account')
            return redirect(url_for('auth.signup'))
        if not consent:
            flash('Must sign consent form to use this tool')
            return redirect(url_for('auth.signup'))

        new_user = User(email=email, name=name, role=role, password=generate_password_hash(password, method='sha256'))

        db.session.add(new_user)
        db.session.commit()

        return redirect(url_for('auth.login'))

    else:
        return render_template('signup.html')

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    session['logged_in'] = False
    return redirect(url_for('main.index'))

def role_required(roles):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            if not current_user:
                return redirect(url_for('login'))
            elif (current_user.role not in roles): 
                flash("You can't be here")
                return redirect(url_for('main.index'))
            else:
                return func(*args, **kwargs) 
        return wrapper
    return decorator