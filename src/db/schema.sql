DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  dept_name VARCHAR(30) UNIQUE NOT NULL,
);

CREATE TABLE emp_role (
  id SERIAL PRIMARY KEY,
  role_title VARCHAR(30) UNIQUE NOT NULL,
  role_salary DECIMAL NOT NULL,
  dept_id INTEGER NOT NULL,
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  emp_first_name VARCHAR(30) NOT NULL,
  emp_last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
);