DROP DATABASE IF EXISTS g3r0y0rie77jrjvi;

CREATE DATABASE g3r0y0rie77jrjvi;

USE g3r0y0rie77jrjvi;

CREATE TABLE users (
  userid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  wholename VARCHAR(100),
  gender VARCHAR(10),
  age_range INT(3),
  email VARCHAR(100) UNIQUE,
  country VARCHAR(60)
);

CREATE TABLE events (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  email VARCHAR(100),
  eventname VARCHAR(500),
  eventlocation VARCHAR(200),
  datecreated INT,
  FOREIGN KEY (email) REFERENCES users(email)
);