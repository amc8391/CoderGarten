__author__ = 'Team OnePunch'

from flask import Flask

app = Flask(__name__)
app.secret_key = '\x10\x88R\xb1(\xacB\xd5\xe0#[^\xe0\xe4[\xe8\x92\x04\xa9\xad\r\xb3E\x9d'
from app import views
