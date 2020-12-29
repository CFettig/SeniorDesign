from . import db
from flask_login import UserMixin
from datetime import datetime

class User(UserMixin, db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    transcripts = db.relationship('Transcript', backref='user', lazy=True)

    def serialize(self):
        return {"id": self.id,
                "email": self.email,
                "password": self.password,
                "name": self.name
                }

class Transcript(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text)
    date = db.Column(db.DateTime, nullable=False,
        default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)

    def serialize(self):
        return {"id": self.id,
                "text": self.text,
                "date": self.date,
                "user_id": self.user_id
                }