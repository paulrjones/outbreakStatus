DROP DATABASE IF EXISTS outbreakStatus_db;

CREATE DATABASE outbreakStatus_db;

USE outbreakStatus_db;

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
  FOREIGN KEY (email) REFERENCES users(email),
);