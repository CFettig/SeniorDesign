from . import db
from flask_login import UserMixin
from datetime import datetime

class User(UserMixin, db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100))
    name = db.Column(db.String(1000))
    role = db.Column(db.String(7))
    # transcripts = db.relationship('Transcript', backref='user', lazy=True)

    def serialize(self):
        return {"id": self.id,
                "email": self.email,
                "password": self.password,
                "name": self.name
                }

class Transcript(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.String(100))
    text = db.Column(db.Text)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    main_practice_time = db.Column(db.Float, default=0)
    sound_practice_time = db.Column(db.Float, default=0)
    practiced_sounds = db.Column(db.String(3))
    practiced_pairs = db.relationship("PracticedPair")
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def serialize(self):
        return {"id": self.id,
                "text": self.text,      
                "date": self.date,
                "practiced_sounds": self.practiced_sounds,
                "main_practice_time": self.main_practice_time,
                "sound_practice_time": self.sound_practice_time,
                "user_id": self.user_id
                }

class PracticedPair(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    transcript_id = db.Column(db.Integer, db.ForeignKey('transcript.id'), nullable=False)
    actual_word = db.Column(db.String(100))
    intended_word = db.Column(db.String(100))

    def serialize(self):
        return {"id": self.id,
                "transcript_id": self.transcript_id,
                "actual_word": self.actual_word,
                "intended_word": self.intended_word
                }

class LessonContent(db.Model):
    extend_existing=True
    # id = db.Column(db.Integer, primary_key=True)
    sound = db.Column(db.String(3), primary_key=True)
    intro_text = db.Column(db.Text)
    illustration = db.Column(db.String(100))
    example_audio_male = db.Column(db.String(100))
    example_audio_female = db.Column(db.String(100))
    quiz_words = db.Column(db.String(100))
    min_pair = db.relationship('MinPair', backref='lesson', lazy=True)

    def serialize(self):
        return {"id": self.id,
                "sound": self.sound,
                "intro_text": self.intro_text,
                "example_audio_male": self.example_audio_male,
                "example_audio_female": self.example_audio_female,
                }

class MinPair(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    audio = db.Column(db.String(100))
    same = db.Column(db.Boolean)
    lesson_id = db.Column(db.String(3), db.ForeignKey(LessonContent.sound),
        nullable=False)

    def serialize(self):
        return {"id": self.id,
                "audio": self.audio,
                "same": self.same,
                "lesson_id": self.lesson_id
                }