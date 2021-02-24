from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_apscheduler import APScheduler

# init SQLAlchemy 
db = SQLAlchemy()
# init scheduler
# scheduler = APScheduler()

def create_app():
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'secret-key-goes-here'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'

    db.init_app(app)

    with app.app_context():
        from .models import User, Transcript
        db.create_all()

        login_manager = LoginManager()
        login_manager.login_view = 'auth.login'
        login_manager.init_app(app)

        from .models import User
        @login_manager.user_loader
        def load_user(user_id):
            user = User.query.get(int(user_id))
            return User.query.get(int(user_id))

        # from .main import update_time_test
        # scheduler.init_app(app)
        # scheduler.add_job(id='update_time', func=update_time_test, trigger='interval', seconds=5, replace_existing=True)
        # scheduler.start()
        

    # blueprint for auth routes in our app
    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    # blueprint for non-auth parts of app
    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    #scheduling job to calculate time spent on single page
    # from .main import update_time
    
    # try:
    #     return app
    # except:
    #     scheduler.shutdown()

    return app