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
    return render_template('student-homepage.html', active_page='home')

@app.route('/student-assignments')
def student_assignments():
    return render_template('student-assignments.html', active_page='assignments')

# TODO: Replace later.
@app.route('/parent-homepage')
def parent_homepage():
    return render_template('parent-homepage.html', active_page='home')

@app.route('/leaderboard')
def leaderboard():
    return render_template('leaderboard.html', active_page='leaderboards')

@app.route('/messages')
def messages():
    return render_template('messages.html', active_page='messages')

@app.route('/message/new')
def new_message():
    return render_template('new-message.html', active_page='messages')

@app.route('/message/view')
def view_message():
    return render_template('view-message.html', active_page='messages')


@app.route('/teacher-assignments', methods=['GET', 'POST'])
def teacher_assignments():
    if request.method == "POST":
        session['modal'].append(request.form['modal'])

    return render_template('teacher-assignments.html', active_page='assignments')


@app.route('/editor')
def editor():
    return render_template('editor.html')


@app.route('/teacher-homepage')
def teacher_homepage():
    return render_template('teacher-homepage.html', active_page='home')

@app.route('/settings')
def settings():
    return render_template('settings.html', active_page='settings')

@app.route('/class-section')
def class_section():
    return render_template('class-section.html')