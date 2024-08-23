DROP DATABASE IF EXISTS sample_db;
CREATE DATABASE sample_db;

\c sample_db;

CREATE TABLE sample_table (
  id SERIAL PRIMARY KEY,
  sample_name VARCHAR(30) UNIQUE NOT NULL
);

INSERT INTO sample_table (id, sample_name)
VALUES  (1, 'Sales'),
        (2, 'Engineering'),
        (3, 'Finance'),
        (4, 'Legal');