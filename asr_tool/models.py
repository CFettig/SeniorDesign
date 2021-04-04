from . import db
from flask_login import UserMixin
from datetime import datetime
import pytz


# User login info
class User(UserMixin, db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100))
    role = db.Column(db.String(10))
    info = db.relationship("UserInfo", uselist=False, back_populates="user")

    def serialize(self):
        return {"id": self.id,
                "email": self.email,
                "password": self.password,
                # "name": self.name
                }

#User demographics info
#Only users with student role have associated UserInfo 
class UserInfo(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer)
    gender = db.Column(db.String(25))
    native_lang = db.Column(db.String(100))
    time_studying_english = db.Column(db.Integer)
    self_assessed_eng_ability = db.Column(db.String(13))
    how_found_site = db.Column(db.String(200))
    num_practice_sess = db.Column(db.Integer, default=0)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', back_populates='info')

#User ratings
class Rating(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow().replace(tzinfo=pytz.utc))
    rating = db.Column(db.Integer)
    feedback = db.Column(db.String(1048))

#Transcript of a practice session
class Transcript(db.Model):
    extend_existing=True
    id = db.Column(db.Integer, primary_key=True)
    prompt = db.Column(db.String(100))
    text = db.Column(db.Text, default="")
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow().replace(tzinfo=pytz.utc))
    main_practice_time = db.Column(db.Float, default=0)
    sound_practice_time = db.Column(db.Float, default=0)
    practiced_sounds = db.Column(db.String(3), default="")
    practiced_pair = db.relationship('PracticedPair', backref=db.backref('transcript', lazy='select'))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('transcript', lazy='dynamic'))

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
    actual_word = db.Column(db.String(100))
    intended_word = db.Column(db.String(100))
    transcript_id = db.Column(db.Integer, db.ForeignKey('transcript.id'), nullable=False)

    def serialize(self):
        return {"id": self.id,
                "transcript_id": self.transcript_id,
                "actual_word": self.actual_word,
                "intended_word": self.intended_word
                }

class LessonContent(db.Model):
    extend_existing=True
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