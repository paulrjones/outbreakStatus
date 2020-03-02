DROP DATABASE IF EXISTS outbreakStatus_db;

CREATE DATABASE outbreakStatus_db;

USE outbreakStatus_db;

CREATE TABLE users (
  userid INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(30) NOT NULL UNIQUE
);

