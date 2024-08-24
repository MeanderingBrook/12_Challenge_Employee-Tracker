// async function dbCreate() {
//   const client = await getClient();
//   console.log(client);

//   let createDBQuery = `
//     CREATE DATABASE employee_db;
//   `;
//   const res = await client.query(createDBQuery);
//   console.log("Created Database, employee_db");
//   await client.end();
// }

// async function dbConnect() {
//   const client = await getClient();

//   let connectDBQuery = `
//     \c employee_db;
//   `;
//   const res = await client.query(connectDBQuery);
//   console.log("Connected to Database, employee_db");
//   await client.end();
// }

// async function createTable() {
//   const client = await getClient();

//   let createTableQuery = `
//     CREATE TABLE department (
//       id SERIAL PRIMARY KEY,
//       dept_name VARCHAR(30) UNIQUE NOT NULL
//     );
//   `;
//   const res = await client.query(createTableQuery);
//   console.log("Created new Table, department");
//   await client.end();
// }

// async function populateTable() {
//   const client = await getClient();

//   let populateTableQuery = `
//     INSERT INTO department (id, dept_name)
//     VALUES  (1, 'Sales'),
//             (2, 'Engineering'),
//             (3, 'Finance'),
//             (4, 'Legal');
//   `;
//   const res = await client.query(populateTableQuery);
//   console.log("Populated data to Table, department");
//   await client.end();
// }

// async function populateTable() {
//   const client = await getPool();

//   let populateTableQuery = `
//     INSERT INTO department (id, dept_name)
//     VALUES  (1, 'Sales'),
//             (2, 'Engineering'),
//             (3, 'Finance'),
//             (4, 'Legal');
//   `;
//   const res = await client.query(populateTableQuery);
//   console.log("Populated data to Table, department");
//   await client.end();
// }

// async function createTable() {
//   const client = await getPool();

//   let createTableQuery = `
//     CREATE TABLE department (
//       id SERIAL PRIMARY KEY,
//       dept_name VARCHAR(30) UNIQUE NOT NULL
//     );
//   `;
//   const res = await client.query(createTableQuery);
//   console.log("Created new Table, department");
//   await client.end();
// }

// query.js
// const { getPool } = require("./connect.js");
// const Pool = require("./connect.js");

// connect.js
// async function getPool() {
//   const pool = new Pool({
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     database: process.env.PG_DATABASE,
//     // database: "postgres",
//   });
//   await pool.connect();
//   const res = await pool.query("SELECT $1::text as connected", [
//     "Connection to Postgres database, employee_db, successful!",
//   ]);
//   console.log(res.rows[0].connected);
//   return pool;
//   // await client.end();
// }

// client.connect(function (err) {
//   if (err) throw err;
//   console.log("Postgres Database is connected.");
// });
// module.exports = { getPool };

// index.js
const { getPool } = require("./db/connect.js");

//   const userInput = await inquirer.prompt(mainMenu);
//   console.log(`index.js Line 49: ${userInput.menuOptions}`);
//   switch (userInput.menuOptions) {
//     case "View All Employees":
//       console.log("blah blah Output All Employees");
//       viewEmpTable();
//       break;
//     case "Add New Employee":
//       console.log("blah blah Add New Employee");
//       addEmp();
//       break;
//     case "Update Employee Role":
//       console.log("blah blah Update Employee Role");
//       break;
//     case "View All Roles":
//       console.log("blah blah View All Roles");
//       viewRoleTable();
//       break;
//     case "Add New Role":
//       console.log("blah blah Add New Role");
//       addRole();
//       break;
//     case "View All Departments":
//       console.log("blah blah View All Departments");
//       break;
//     case "Add New Department":
//       console.log("blah blah Add New Department");
//       break;
//     case "Quit Application":
//       console.log("blah blah Quit Application");
//       break;
//   }

// const mainMenu = [
//   {
//     type: "list",
//     name: "menuOptions",
//     message: "What would  you like to do?",
//     choices: [
//       "View All Employees",
//       "Add New Employee",
//       "Update Employee Role",
//       "View All Roles",
//       "Add New Role",
//       "View All Departments",
//       "Add New Department",
//       "Quit Application",
//     ],
//   },
// ];

// async function selectEmpTable() {
//   const connection = await pool.connect();
//   try {
//     // await pool.connect();
//     console.log("query.js Line 194: Connected to Database (selectEmpTable)");

//     const res = await pool.query(`
//       SELECT * FROM employee;
//       `);
//     console.log("query.js Line 198: Queried data from Table (selectEmpTable)");
//     return res.rows;
//   } catch (err) {
//     console.log(
//       "query.js Line 201: Error retrieving Table (selectEmpTable)",
//       err
//     );
//   } finally {
//     // await pool.end();
//     console.log(
//       "query.js Line 207: Closed connection to Database (selectEmpTable)"
//     );
//     // pool.release();
//     connection.release();
//   }
// }
