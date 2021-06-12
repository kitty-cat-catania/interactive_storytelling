### Write Flask App Below 
import json
import sqlite3
from flask import Flask
from flask import render_template
#from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)






@app.route('/list')
def list():
   con = sqlite3.connect("migration.db")
   cur = con.cursor()
   cur.execute("select * from trends")
   rows = cur.fetchall()
   desc = cur.description
   data = []
   for row in rows:
      data.append({ desc[i][0]: v for (i,v) in enumerate(row) })
    
   return json.dumps(data) 
   #render_template("list.html",rows = data)


#database configuration


# c.execute("SELECT * FROM a6_distance LIMIT 5")
# print(c.fetchall())

# c.execute("SELECT * FROM trends LIMIT 5")
# print(c.fetchall())





@app.route('/')
def hello_world():
	return "Hello World"


	


if __name__ == '__main__':
    app.run(debug=True)