DROP SCHEMA public CASCADE;

CREATE SCHEMA public;

CREATE TABLE IF NOT EXISTS USERS (
  ID SERIAL PRIMARY KEY,
  FIRST text,
  AVATAR text
);

CREATE TABLE IF NOT EXISTS REVIEWS (
  ID SERIAL PRIMARY KEY,
  PROPERTY_ID integer,
  USER_ID integer,
  DATE text,
  REVIEW text,
  REPLY text,
  FOREIGN KEY (USER_ID) 
  REFERENCES USERS(ID)
);

CREATE TABLE IF NOT EXISTS RATINGS (
  ID SERIAL PRIMARY KEY,
  REVIEW_ID integer,
  AVERAGE numeric(4,2),
  ACCURACY integer,
  COMMUNICATION integer,
  CLEANLINESS integer,
  LOCATION integer,
  CHECKIN integer,
  VALUE integer,
  FOREIGN KEY (REVIEW_ID) 
  REFERENCES REVIEWS(ID)
);
