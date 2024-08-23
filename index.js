// Require necessary Node Modules
const inquirer = require("inquirer");
const fs = require("fs");
const { connect } = require("http2");

// Require Application Modules
const {
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
} = require("./db/query.js");

// Application User Interface (UI) Selection Options
const mainMenu = [
  {
    type: "list",
    name: "menuOptions",
    message: "What would  you like to do?",
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
];

// Functional initializes App
async function init() {
  // dbCreate();
  // dbConnect();
  await createDeptTable();
  // await createRoleTable();
  // await createEmpTable();
  // await seedDeptTable();
  // await seedRoleTable();
  // await seedEmpTable();

  const userInput = await inquirer.prompt(mainMenu);
  console.log(`index.js Line 49: ${userInput.menuOptions}`);
  switch (userInput.menuOptions) {
    case "View All Employees":
      console.log("blah blah Output All Employees");
      viewEmpTable();
      break;
    case "Add New Employee":
      console.log("blah blah Add New Employee");
      addEmp();
      break;
    case "Update Employee Role":
      console.log("blah blah Update Employee Role");
      break;
    case "View All Roles":
      console.log("blah blah View All Roles");
      viewRoleTable();
      break;
    case "Add New Role":
      console.log("blah blah Add New Role");
      addRole();
      break;
    case "View All Departments":
      console.log("blah blah View All Departments");
      break;
    case "Add New Department":
      console.log("blah blah Add New Department");
      break;
    case "Quit Application":
      console.log("blah blah Quit Application");
      break;
  }
}

async function viewEmpTable() {
  let data = await selectEmpTable();
  console.log(data);
}

async function addEmp() {
  let data = await newEmp(employee);
  console.log(data);
}

async function addRole() {
  let data = await newRole(role);
  console.log(data);
}

async function viewRoleTable() {
  let data = await selectRoleTable();
  console.log(data);
}

function quitApp() {
  console.log("You have successfully quit the Employee Tracker.");
  process.exit();
}

// Function call to initialize app
init();
