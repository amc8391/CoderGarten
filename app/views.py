__author__ = 'Team OnePunch'
from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/student-homepage')
def student_homepage():
	return render_template('student-homepage.html')



@app.route('/messages')
def messages():
	return render_template('messages.html')


