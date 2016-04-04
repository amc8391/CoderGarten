__author__ = 'Team OnePunch'
from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/student-homepage')
def student_homepage():
	return render_template('student-homepage.html')

# TODO: Replace later.
@app.route('/parent-homepage')
def parent_homepage():
	return render_template('parent-homepage.html')

@app.route('/leaderboard')
def leaderboard():
	return render_template('leaderboard.html')

@app.route('/messages')
def messages():
	return render_template('messages.html')

@app.route('/message/view')
def view_message():
	return render_template('view-message.html')

@app.route('/teacher-assignments')
def teacher_assignments():
	return render_template('teacher-assignments.html')


