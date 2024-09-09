// Require necessary Node Modules
const inquirer = require("inquirer");

// Require Application Modules
const pool = require("./connect.js");

// // // // //

function appMenu() {
  return inquirer.prompt([
    {
      type: "list",
      name: "menuOptions",
      message: "Please select an action from the command list:",
      choices: [
        "View All Employees",
        "Add New Employee",
        "Update Employee Role",
        "View All Roles",
        "Add New Role",
        "View All Departments",
        "Add New Department",
        "Quit Application",
      ],
    },
  ]);
}

// // // // //

// Deprecated in favor Database Creation through Postgres Shell
// Creates Employee Database (employee_db)
async function dbCreate() {
  // const client = await getPool();
  await pool.connect();
  // console.log(client);

  let createDBQuery = `
    CREATE DATABASE employee_db;
  `;
  const res = await client.query(createDBQuery);
  // console.log("query.js Line 12: Created Database, employee_db");
  await client.end();
}

// Deprecated in favor of dedicated Connection through connect.js
// Connects to newly-created Employee Database (employee_db)
async function dbConnect() {
  // const client = await getPool();
  await pool.connect();

  let connectDBQuery = `
    \c employee_db;
  `;
  const res = await client.query(connectDBQuery);
  // console.log("query.js Line 23: Connected to Database, employee_db");
  await client.end();
}

// Creates Employee Database, Department Table (invoked once, to initialize App)
async function createDeptTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 30: Connected to Database (createDeptTable)");

    // await pool.query(`
    await connection.query(`
      CREATE TABLE IF NOT EXISTS department (
      id SERIAL PRIMARY KEY,
      dept_name VARCHAR(30) UNIQUE NOT NULL
      );
    `);
    console.log("query.js Line 38: Created new Table (createDeptTable)");
  } catch (err) {
    // console.log(
    //   "query.js Line 40: Error creating Table (createDeptTable)",
    //   err
    // );
  } finally {
    // console.log(
    //   "query.js Line 43: Closed connection to Database (createDeptTable)"
    // );
    connection.release();
  }
}

// Creates Employee Database, Role Table (invoked once, to initialize App)
async function createRoleTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 57: Connected to Database (createRoleTable)");

    // await pool.query(`
    await connection.query(`
      CREATE TABLE IF NOT EXISTS role (
      id SERIAL PRIMARY KEY,
      title VARCHAR(30) UNIQUE NOT NULL,
      salary DECIMAL,
      department INTEGER,
      CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES department(id) ON DELETE CASCADE
      );
    `);
    // console.log("query.js Line 67: Created new Table (createRoleTable)");
  } catch (err) {
    // console.log(
    //   "query.js Line 70: Error creating Table (createRoleTable)",
    //   err
    // );
  } finally {
    // console.log(
    //   "query.js Line 76: Closed connection to Database (createRoleTable)"
    // );
    connection.release();
  }
}

// Creates Employee Database, Employee Table (invoked once, to initialize App)
async function createEmpTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 82: Connected to Database (createEmpTable)");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS employee (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(30) NOT NULL,
      last_name VARCHAR(30) NOT NULL,
      role_id INTEGER NOT NULL,
      manager_id INTEGER,
      CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
      CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
      );
    `);
    // console.log("query.js Line 93: Created new Table (createEmpTable)");
  } catch (err) {
    // console.log("query.js Line 95: Error creating Table (createEmpTable)", err);
  } finally {
    // console.log(
    //   "query.js Line 99: Closed connection to Database (createEmpTable)"
    // );
    connection.release();
  }
}

// Seeds Employee Database, Department Table (invoked once, to initialize App)
async function seedDeptTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 53: Connected to Database (seedDeptTable)");

    await pool.query(`
      INSERT INTO department (dept_name)
      VALUES  ('Sales'),
              ('Engineering'),
              ('Finance'),
              ('Legal');
      `);
    // console.log("query.js Line 62: Populated data to Table (seedDeptTable)");
  } catch (err) {
    // console.log(
    //   "query.js Line 64: Error populating Table (seedDeptTable)",
    //   err
    // );
  } finally {
    // console.log(
    //   "query.js Line 67: Closed connection to Database (seedDeptTable)"
    // );
    connection.release();
  }
}

// Seeds Employee Database, Role Table (invoked once, to initialize App)
async function seedRoleTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 133: Connected to Database (seedRoleTable)");

    await connection.query(`
      INSERT INTO role (title, salary, department)
      VALUES  ('Sales Lead', 10000, 1),
              ('Salesperson', 80000, 1),
              ('Lead Engineer', 150000, 2),
              ('Software Engineer', 120000, 2),
              ('Account Manager', 160000, 3),
              ('Accountant', 125000, 3),
              ('Legal Team Lead', 250000, 4),
              ('Lawyer', 190000, 4);
      `);
    // console.log("query.js Line 142: Populated data to Table (seedRoleTable)");
  } catch (err) {
    // console.log(
    //   "query.js Line 145: Error populating Table (seedRoleTable)",
    //   err
    // );
  } finally {
    // console.log(
    //   "query.js Line 151: Closed connection to Database (seedRoleTable)"
    // );
    connection.release();
  }
}

// Seeds Employee Database, Employee Table (invoked once, to initialize App)
async function seedEmpTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 163: Connected to Database (seedEmpTable)");

    await connection.query(`
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES  ('Aaron', 'Anderson', 1, NULL),
              ('Brian', 'Black', 2, 1),
              ('Carl', 'Carpenter', 3, NULL),
              ('David', 'Draper', 4, 3),
              ('Erin', 'Eckles', 5, NULL),
              ('Frank', 'Fuller', 6, 5),
              ('George', 'Green', 7, NULL),
              ('Harry', 'Hamlin', 8, 7);
      `);
    // console.log("query.js Line 176: Populated data to Table (seedEmpTable)");
  } catch (err) {
    // console.log(
    //   "query.js Line 179: Error populating Table (seedEmpTable)",
    //   err
    // );
  } finally {
    // console.log(
    //   "query.js Line 185: Closed connection to Database (seedEmpTable)"
    // );
    connection.release();
  }
}

// Seleects all records from Employee Table
async function selectEmpTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 194: Connected to Database (selectEmpTable)");

    const res = await pool.query(`
      SELECT
        employee.first_name || ' ' || employee.last_name employee_name,
        employee.role_id,
        role.title,
        role.salary,
        employee.manager_id,
        manager.first_name || ' ' || manager.last_name AS manager,
        department.dept_name
      FROM 
        employee
      LEFT JOIN
        role ON employee.role_id = role.id
      LEFT JOIN
        department ON role.department = department.id
      LEFT JOIN
      employee manager ON manager.id = employee.manager_id;
      `);
    // console.log("query.js Line 198: Queried data from Table (selectEmpTable)");
    return res.rows;
  } catch (err) {
    // console.log(
    //   "query.js Line 201: Error retrieving Table (selectEmpTable)",
    //   err
    // );
  } finally {
    // console.log(
    //   "query.js Line 207: Closed connection to Database (selectEmpTable)"
    // );
    connection.release();
  }
}

// Seleects all records from Department Table
async function selectDeptTable() {
  const connection = await pool.connect();
  // console.log("Connection: ", connection);

  try {
    console.log("query.js Line 231: Connected to Database (selectDeptTable)");

    const res = await pool.query(`
      SELECT * FROM department;
      `);
    // console.log("query.js Line 236: Queried data from Table (selectDeptTable)");
    // console.log("Data: ", res.rows);
    return res.rows;
  } catch (err) {
    // console.log("query.js Line 239: Error retrieving Table (selectDeptTable)"),
    //   err;
  } finally {
    // console.log(
    //   "query.js Line 242: Closed connection to Database (selectDeptTable)"
    // );
    connection.release();
  }
}

// Seleects all records from Role Table
async function selectRoleTable() {
  const connection = await pool.connect();
  try {
    // console.log("query.js Line 218: Connected to Database (selectRoleTable)");

    const res = await pool.query(`
      SELECT * FROM role;
      `);
    // console.log("query.js Line 223: Queried data from Table (selectRoleTable)");
    return res.rows;
  } catch (err) {
    // console.log("query.js Line 226: Error retrieving Table (selectRoleTable)"),
    //   err;
  } finally {
    // console.log(
    //   "query.js Line 230: Closed connection to Database (selectRoleTable)"
    // );
    connection.release();
  }
}

async function createEmployee(employee) {
  const connection = await pool.connect();
  const { first_name, last_name, role_id, manager_id } = employee;

  const res = await pool.query(
    `
    INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)
    `,
    [first_name, last_name, role_id, manager_id]
  );
  console.log(res);
  connection.release();
}

async function createRole(role) {
  const connection = await pool.connect();
  const { title, salary, department } = role;

  const res = await pool.query(
    `
    INSERT INTO role(title, salary, department) VALUES ($1, $2, $3)
    `,
    [title, salary, department]
  );
  console.log(res);
  return res;
}

async function newEmp() {
  selectRoleTable().then((rows) => {
    let roles = rows;
    const selectedRole = roles.map(({ id, title }) => ({
      // Inquired-required syntax defining returned values for display, 'name', 'value'
      name: title,
      value: id,
    }));
    // console.log(roles);

    selectEmpTable().then((rows) => {
      let employees = rows;
      const empManager = employees.map(({ id, employee_name }) => ({
        name: employee_name,
        value: id,
      }));
      // console.log(employees);

      inquirer
        .prompt([
          {
            type: "list",
            name: "roleID",
            message: "Select the new Employee's Role:",
            choices: selectedRole,
          },
          {
            type: "input",
            name: "first_name",
            message: "Enter the new employee's first name.",
          },
          {
            type: "input",
            name: "last_name",
            message: "Enter the new employee's last name.",
          },
          {
            type: "list",
            name: "managerID",
            message: "Select the new Employee's Manager:",
            choices: empManager,
          },
        ])
        .then((res) => {
          let employee = {
            first_name: res.first_name,
            last_name: res.last_name,
            role_id: res.roleID,
            manager_id: res.managerID,
          };
          createEmployee(employee);
        })
        .catch((err) => console.log(err));
    });
  });
}

async function newRole() {
  selectDeptTable().then((rows) => {
    let departments = rows;
    const selectedDept = departments.map(({ id, title }) => ({
      name: title,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "deptID",
          message: "Select the new Roles's Department:",
          choices: selectedDept,
        },
        {
          type: "input",
          name: "title",
          message: "Enter the new Role's Name.",
        },
        {
          type: "input",
          name: "salary",
          message: "Enter the new Role's Salary.",
        },
      ])
      .then(async (res) => {
        let role = {
          title: res.title,
          salary: res.salary,
          department: res.deptID,
        };
        return await createRole(role);
      })
      .catch((err) => console.log(err));
  });
  // appMenu();
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
  newRole,
  selectDeptTable,
  selectRoleTable,
};
