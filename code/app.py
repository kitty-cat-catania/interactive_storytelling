### Write Flask App Below 

import sqlite3
from flask import Flask  


conn = sqlite3.connect("migration.db")
c = conn.cursor()





app = Flask(__name__)

@app.route('/')
def hello_world():
	return "Hello World"
	


if __name__ == '__main__':
    app.run(debug=True)