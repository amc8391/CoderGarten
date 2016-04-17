__author__ = 'Team OnePunch'
from app import app
from flask import render_template, request, session


@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/')
@app.route('/login')
def login():
    session.clear()
    session['modal'] = []
    return render_template('login.html')

@app.route('/student-homepage')
def student_homepage():
    return render_template('student-homepage.html')

@app.route('/student-assignments')
def student_assignments():
    return render_template('student-assignments.html')

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

@app.route('/message/new')
def new_message():
    return render_template('new-message.html')

@app.route('/message/view')
def view_message():
    return render_template('view-message.html')


@app.route('/teacher-assignments', methods=['GET', 'POST'])
def teacher_assignments():
    if request.method == "POST":
        session['modal'].append(request.form['modal'])

    return render_template('teacher-assignments.html')


@app.route('/editor')
def editor():
    return render_template('editor.html')


@app.route('/teacher-homepage')
def teacher_homepage():
    return render_template('teacher-homepage.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

@app.route('/class-section')
def class_section():
    return render_template('class-section.html')