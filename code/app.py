### Write Flask App Below 
import json
import sqlite3
from flask import Flask
from flask import render_template, jsonify
#from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
@app.route('/')
def home():
   return render_template('index.html')
@app.route('/trends')
def trends():
   con = sqlite3.connect("migration.db")
   cur = con.cursor()
   cur.execute("select * from trends")
   desc = cur.description
   print(desc)
   rows = cur.fetchall()

   data = []
   for row in rows:
      data.append({ desc[i][0]: v for (i,v) in enumerate(row) })
   return jsonify(data) 
@app.route('/a6_distance')
def distance():
   con = sqlite3.connect("migration.db")
   cur = con.cursor()
   cur.execute("select * from a6_distance")
   rows = cur.fetchall()
   desc = cur.description
   data = []
   for row in rows:
      data.append({ desc[i][0]: v for (i,v) in enumerate(row) })
   return jsonify(data)
@app.route('/a5_reasons')
def reasons():
   con = sqlite3.connect("migration.db")
   cur = con.cursor()
   cur.execute("select * from a5_reasons")
   rows = cur.fetchall()
   desc = cur.description
   data = []
   for row in rows:
      data.append({ desc[i][0]: v for (i,v) in enumerate(row) })
   return jsonify(data)
@app.route('/a1_movers')
def movers():
   con = sqlite3.connect("migration.db")
   cur = con.cursor()
   cur.execute("select * from a1_movers")
   rows = cur.fetchall()
   desc = cur.description
   data = []
   for row in rows:
      data.append({ desc[i][0]: v for (i,v) in enumerate(row) })
   return jsonify(data)
@app.route('/state_to_state')
def state_to_state():
   con = sqlite3.connect("migration.db")
   cur = con.cursor()
   cur.execute("select * from state_to_state")
   rows = cur.fetchall()
   desc = cur.description
   data = []
   for row in rows:
      data.append({ desc[i][0]: v for (i,v) in enumerate(row) })
   return jsonify(data)
   #render_template("list.html",rows = data)
if __name__ == '__main__':
    app.run(debug=True)