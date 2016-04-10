__author__ = 'Team OnePunch'

#!flask/bin/python
import os
from flask import Flask
from app import app

#app.run(debug=True)
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)