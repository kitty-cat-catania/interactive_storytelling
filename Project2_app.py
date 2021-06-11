# Import Dependencies 
from flask import Flask
import sqlite 3
# Create an instance of Flask app
app = Flask(__name__)

conn = sqlite3.connect('map.db')
print "Opened database successfully";

conn.execute('CREATE TABLE A1_movers (
mobility_period VARCHAR(30) NOT NULL,
total_ages1_up INT,
non_movers INT,
movers_total INT,
movers_domestic INT,
movers_same_county INT,
movers_total_new_county INT,
movers_new_county_same_state INT,
movers_new_county_new_state INT,
movers_from_abroad INT,
total_ages1_up_per REAL,
non_movers_per REAL,
movers_total_per REAL,
movers_domestic_per REAL,
movers_same_county_per REAL,
movers_total_new_county_per REAL,
movers_new_county_same_state_per REAL,
movers_new_county_new_state_per REAL,
movers_from_abroad_per REAL)' CREATE TABLE a5_reasons (
mobility_period VARCHAR(30) NOT NULL,
movers_total INT,
family_marital_status_change INT,
family_establish_own_household INT,
family_other INT,
job_new INT,
job_seeking INT,
job_better_commute INT,
job_retired INT,
job_other INT,
housing_ownership INT,
housing_upsize INT,
housing_better_neighborhood INT,
housing_cheaper INT,
housing_eviction INT,
housing_other INT,
other_relationship INT,
other_college INT,
other_climate INT,
other_health INT,
other_natural_disaster INT,
other_other INT,
movers_total_per REAL,
family_marital_status_change_per REAL,
family_establish_own_household_per REAL,
family_other_per REAL,
job_new_per REAL,
job_seeking_per REAL,
job_better_commute_per REAL,
job_retired_per REAL,
job_other_per REAL,
housing_ownership_per REAL,
housing_upsize_per REAL,
housing_better_neighborhood_per REAL,
housing_cheaper_per REAL,
housing_eviction_per REAL,
housing_other_per REAL,
other_relationship_per REAL,
other_college_per REAL,
other_climate_per REAL,
other_health_per REAL,
other_natural_disaster_per REAL,
other_other_per REAL)' CREATE TABLE a6_distance (
mobility_period VARCHAR(30) NOT NULL,
movers_total_new_county INT,
movers_new_county_under_50miles INT,
movers_new_county_50_199miles INT,
movers_new_county_200_499miles INT,
movers_new_county_over_500miles INT,
movers_total_new_county_per REAL,
movers_new_county_under_50miles_per REAL,
movers_new_county_50_199miles_per REAL,
movers_new_county_200_499miles_per REAL,
movers_new_county_over_500miles_per REAL)' CREATE TABLE trends (
mobility_period VARCHAR(30) NOT NULL,
period_duration_years INT,
origin VARCHAR(30) NOT NULL,
destination VARCHAR(30) NOT NULL,
migration INT,
source VARCHAR(30) NOT NULL)')
print "Table created successfully";
conn.close()



@app.route('/')
def testdb():
    try:
        db.session.query(text('1')).from_statement(text('SELECT 1')).all()
        return '<h1>It works.</h1>'
    except Exception as e:
        # e holds description of the error
        error_text = "<p>The error:<br>" + str(e) + "</p>"
        hed = '<h1>Something is broken.</h1>'
        return hed + error_text

if __name__ == '__main__':
    app.run(debug=True)

