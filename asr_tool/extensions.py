from flask_mail import Mail
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
from .adminviews import AdminView

login_manager = LoginManager()
mail = Mail()
db = SQLAlchemy()
admin = Admin(index_view=AdminView())
