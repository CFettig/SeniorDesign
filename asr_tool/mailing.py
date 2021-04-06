from flask import Blueprint, render_template, current_app
from flask_mail import Message
from .extensions import mail

mailing = Blueprint('mailing', __name__)

def send_email(to, subject, template, **kwargs):
    msg = Message(
        subject,
        recipients=[to],
        html=render_template(template, **kwargs),
        sender=current_app.config['MAIL_USERNAME']
    )
    mail.send(msg)