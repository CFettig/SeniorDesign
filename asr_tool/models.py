from . import db
from flask_login import UserMixin

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
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)