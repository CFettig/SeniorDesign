from flask import Flask
import os.path as path
from flask_admin.contrib.fileadmin import FileAdmin
from asr_tool.extensions import mail, login_manager, db, admin
from asr_tool.adminviews import *
from asr_tool.models import *
from flask_sqlalchemy import SQLAlchemy


def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
    app.config.from_pyfile('config.py')

    db.init_app(app)

    mail.init_app(app)

    admin.init_app(app)

    file_path = path.join(path.dirname(__file__), 'static', 'admin_uploads')
    admin.add_view(FileView(file_path, '/static/', name='Files', category="Lessons"))
    admin.add_view(UserView(User, db.session, category="Students"))
    admin.add_view(UserInfoView(UserInfo, db.session, category="Students"))
    admin.add_view(RatingView(Rating, db.session, category="Feedback"))
    admin.add_view(TranscriptView(Transcript, db.session, category="Students"))
    admin.add_view(PracticedPairView(PracticedPair, db.session, category="Students"))
    admin.add_view(LessonContentView(LessonContent, db.session, category="Lessons"))
    admin.add_view(MinPairView(MinPair, db.session, category="Lessons"))

    with app.app_context():
        db.create_all()

        login_manager.login_view = 'auth.login'
        login_manager.init_app(app)

        # from .models import User
        @login_manager.user_loader
        def load_user(user_id):
            user = User.query.get(int(user_id))
            return User.query.get(int(user_id))

    # blueprint for auth routes in our app
    from asr_tool.auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from asr_tool.main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from asr_tool.mailing import mailing as mailing_blueprint 
    app.register_blueprint(mailing_blueprint)
    
    return app