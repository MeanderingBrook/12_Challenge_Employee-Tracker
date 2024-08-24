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
  CONSTRAINT fk_department FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  emp_first_name VARCHAR(30) NOT NULL,
  emp_last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES emp_role(id) ON DELETE CASCADE
  manager_id INTEGER,
  CONSTRAINT fk_department FOREIGN KEY (dept_id) REFERENCES department(id) ON DELETE CASCADE
);