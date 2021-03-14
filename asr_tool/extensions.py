from flask_mail import Mail
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy

login_manager = LoginManager()
mail = Mail()
db = SQLAlchemy()
