// Require Application Modules
const pool = require("./connect.js");

async function dbCreate() {
  // const client = await getPool();
  await pool.connect();
  console.log(client);

  let createDBQuery = `
    CREATE DATABASE employee_db;
  `;
  const res = await client.query(createDBQuery);
  console.log("query.js Line 12: Created Database, employee_db");
  await client.end();
}

async function dbConnect() {
  // const client = await getPool();
  await pool.connect();

  let connectDBQuery = `
    \c employee_db;
  `;
  const res = await client.query(connectDBQuery);
  console.log("query.js Line 23: Connected to Database, employee_db");
  await client.end();
}

async function createDeptTable() {
  const connection = await pool.connect();
  try {
    // await pool.connect();
    console.log("query.js Line 30: Connected to Database (createDeptTable)");

    // await pool.query(`
    await connection.query(`
      CREATE TABLE department (
      id SERIAL PRIMARY KEY,
      dept_name VARCHAR(30) UNIQUE NOT NULL
      );
    `);
    console.log("query.js Line 38: Created new Table (createDeptTable)");
  } catch (err) {
    console.log(
      "query.js Line 40: Error creating Table (createDeptTable)",
      err
    );
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 43: Closed connection to Database (createDeptTable)"
    );
    // pool.release();
    connection.release();
  }
}

async function createRoleTable() {
  try {
    await pool.connect();
    console.log("query.js Line 57: Connected to Database (createRoleTable)");

    await pool.query(`
      CREATE TABLE role (
      id SERIAL PRIMARY KEY,
      title VARCHAR(30) UNIQUE NOT NULL,
      salary DECIMAL,
      department INTEGER
      );
    `);
    console.log("query.js Line 67: Created new Table (createRoleTable)");
  } catch (err) {
    console.log(
      "query.js Line 70: Error creating Table (createRoleTable)",
      err
    );
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 76: Closed connection to Database (createRoleTable)"
    );
    pool.release();
  }
}

async function createEmpTable() {
  try {
    await pool.connect();
    console.log("query.js Line 82: Connected to Database (createEmpTable)");

    await pool.query(`
      CREATE TABLE employee (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      role_id INTEGER,
      manager_id INTEGER
      );
    `);
    console.log("query.js Line 93: Created new Table (createEmpTable)");
  } catch (err) {
    console.log("query.js Line 95: Error creating Table (createEmpTable)", err);
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 99: Closed connection to Database (createEmpTable)"
    );
    pool.release();
  }
}

async function seedDeptTable() {
  try {
    await pool.connect();
    console.log("query.js Line 53: Connected to Database (seedDeptTable)");

    await pool.query(`
      INSERT INTO department (id, dept_name)
      VALUES  (1, 'Sales'),
              (2, 'Engineering'),
              (3, 'Finance'),
              (4, 'Legal');
      `);
    console.log("query.js Line 62: Populated data to Table (seedDeptTable)");
  } catch (err) {
    console.log(
      "query.js Line 64: Error populating Table (seedDeptTable)",
      err
    );
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 67: Closed connection to Database (seedDeptTable)"
    );
    pool.release();
  }
}

async function seedRoleTable() {
  try {
    await pool.connect();
    console.log("query.js Line 133: Connected to Database (seedRoleTable)");

    await pool.query(`
      INSERT INTO role (id, title, salary, department)
      VALUES  (1, 'Sales Lead', 10000, 1),
              (2, 'Salesperson', 80000, 1),
              (3, 'Lead Engineer', 150000, 2),
              (4, 'Software Engineer', 120000, 2),
              (5, 'Account Manager', 160000, 3),
              (6, 'Accountant', 125000, 3),
              (7, 'Legal Team Lead', 250000, 4),
              (8, 'Lawyer', 190000, 4);
      `);
    console.log("query.js Line 142: Populated data to Table (seedRoleTable)");
  } catch (err) {
    console.log(
      "query.js Line 145: Error populating Table (seedRoleTable)",
      err
    );
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 151: Closed connection to Database (seedRoleTable)"
    );
    pool.release();
  }
}

async function seedEmpTable() {
  try {
    await pool.connect();
    console.log("query.js Line 163: Connected to Database (seedEmpTable)");

    await pool.query(`
      INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
      VALUES  (1, 'Aaron', 'Anderson', 1, NULL),
              (2, 'Brian', 'Black', 2, 1),
              (3, 'Carl', 'Carpenter', 3, NULL),
              (4, 'David', 'Draper', 4, 3),
              (5, 'Erin', 'Eckles', 5, NULL),
              (6, 'Frank', 'Fuller', 6, 5),
              (7, 'George', 'Green', 7, 0),
              (8, 'Harry', 'Hamlin', 8, 7);
      `);
    console.log("query.js Line 176: Populated data to Table (seedEmpTable)");
  } catch (err) {
    console.log(
      "query.js Line 179: Error populating Table (seedEmpTable)",
      err
    );
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 185: Closed connection to Database (seedEmpTable)"
    );
    pool.release();
  }
}

async function selectEmpTable() {
  try {
    await pool.connect();
    console.log("query.js Line 194: Connected to Database (selectEmpTable)");

    const res = await pool.query(`
      SELECT * FROM employee;
      `);
    console.log("query.js Line 198: Queried data from Table (selectEmpTable)");
    return res.rows;
  } catch (err) {
    console.log(
      "query.js Line 201: Error retrieving Table (selectEmpTable)",
      err
    );
  } finally {
    // await pool.end();
    console.log(
      "query.js Line 207: Closed connection to Database (selectEmpTable)"
    );
    pool.release();
  }
}

async function newEmp() {}

async function selectRoleTable() {
  try {
    await pool.connect();
    console.log("query.js Line 218: Connected to Database (selectRoleTable)");

    const res = await pool.query(`
      SELECT * FROM role;
      `);
    console.log("query.js Line 223: Queried data from Table (selectRoleTable)");
    return res.rows;
  } catch (err) {
    console.log("query.js Line 226: Error retrieving Table (selectRoleTable)"),
      err;
  } finally {
    console.log(
      "query.js Line 230: Closed connection to Database (selectRoleTable)"
    );
    pool.release();
  }
}

module.exports = {
  dbCreate,
  dbConnect,
  createDeptTable,
  createRoleTable,
  createEmpTable,
  seedDeptTable,
  seedRoleTable,
  seedEmpTable,
  selectEmpTable,
  newEmp,
  selectRoleTable,
};
