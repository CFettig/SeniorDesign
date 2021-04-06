from os import environ, path
from dotenv import load_dotenv

# basedir = path.abspath(path.dirname(__file__))
# load_dotenv(path.join(basedir, '.env'))

DEBUG = True
TESTING = False
CSRF_ENABLED = True
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = environ.get("DATABASE_URL")
# SESSION_COOKIE_SECURE = True
# SESSION_COOKIE_HTTPONLY = True
# SESSION_COOKIE_SAMESITE = 'None'

MAIL_SERVER = 'smtp.gmail.com'
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_USERNAME = environ.get("MAIL_USERNAME")
MAIL_PASSWORD = environ.get("MAIL_PASSWORD")

ENV = "development"
DEVELOPMENT = True
SECRET_KEY = "secret_for_test_environment"
SQLALCHEMY_TRACK_MODIFICATIONS = True