from flask import Flask
from .extensions import mail, login_manager, db, admin
from .adminviews import UserView, TranscriptView, PracticedPairView, LessonContentView, MinPairView, UserInfoView
from .models import User, Transcript, PracticedPair, LessonContent, MinPair, UserInfo


# init SQLAlchemy 
# db = SQLAlchemy()

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'secret-key-goes-here'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

    #email configurations
    app.config['MAIL_SERVER']='smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USERNAME'] = ''
    app.config['MAIL_PASSWORD'] = ''
    app.config['MAIL_DEFAULT_SENDER'] = ''
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USE_SSL'] = False

    db.init_app(app)

    mail.init_app(app)

    admin.init_app(app)

    admin.add_view(UserView(User, db.session))
    admin.add_view(UserInfoView(UserInfo, db.session))
    admin.add_view(TranscriptView(Transcript, db.session))
    admin.add_view(PracticedPairView(PracticedPair, db.session))
    admin.add_view(MinPairView(MinPair, db.session))

    with app.app_context():
        # from .models import User, Transcript, PracticedPair, LessonContent, MinPair
        db.create_all()

        # login_manager = LoginManager()
        login_manager.login_view = 'auth.login'
        login_manager.init_app(app)

        # from .models import User
        @login_manager.user_loader
        def load_user(user_id):
            user = User.query.get(int(user_id))
            return User.query.get(int(user_id))

    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .mailing import mailing as mailing_blueprint 
    app.register_blueprint(mailing_blueprint)

    return app