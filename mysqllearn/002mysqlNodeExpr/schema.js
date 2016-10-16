// CREATE DATABASE 002sqldb;

use 002sqldb;

  CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    age int(2)
  );


  INSERT INTO users (id, name, age) VALUES
  (1, 'Jasmine', 2),
  (2, 'Jay', 'India');

