# Import Dependencies 
import sqlite3
import pandas as pd


# connect to database 
conn = sqlite3.connect('map.db')
c = conn.cursor()
print ("Opened database successfully")

# Drop Tables
c.execute('drop table if exists a5_reasons;')
c.execute('drop table if exists a6_distance;')
c.execute('drop table if exists trends;')

# Create Tables 
c.execute('''CREATE TABLE IF NOT EXISTS a5_reasons (
mobility_period VARCHAR(30) NOT NULL,
movers_total INT,
family_marital_status_change INT,
family_establish_own_household INT,
family_otlsr INT,
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
other_other_per REAL);''')
print ("Table created successfully")

c.execute('''CREATE TABLE IF NOT EXISTS a6_distance (
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
movers_new_county_over_500miles_per REAL);''')
print ("Table created successfully")


c.execute('''CREATE TABLE IF NOT EXISTS trends (
mobility_period VARCHAR(30) NOT NULL,
period_duration_years INT,
origin VARCHAR(30) NOT NULL,
destination VARCHAR(30) NOT NULL,
migration INT,
source VARCHAR(30) NOT NULL);''' )
print("Table created successfully")

#load csvs to tables  
a5_reasons = pd.read_csv('datasets/census_csvs/tab-a-1.csv')
a5_reasons.to_sql('a5_reasons', conn, if_exists="replace")

a6_distance = pd.read_csv('datasets/census_csvs/tab-a-6.csv')
a6_distance.to_sql('a6_distance', conn, if_exists='replace')

trends = pd.read_csv('datasets/census_csvs/state_migration_flows_table-3s.csv')
trends.to_sql('trends', conn, if_exists='replace')

c.execute("SELECT name FROM sqlite_master WHERE type='table'")
print(c.fetchall())

c.execute("SELECT * FROM a5_reasons LIMIT 5")
print(c.fetchall())

c.execute("SELECT * FROM a6_distance LIMIT 5")
print(c.fetchall())

c.execute("SELECT * FROM trends LIMIT 5")
print(c.fetchall())

conn.close()