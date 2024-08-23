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
