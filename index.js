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
  selectDeptTable,
  selectRoleTable,
  newEmp,
} = require("./db/query.js");

// Application User Interface (UI) Selection Options
function mainMenu() {
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

async function userInput() {
  const userInput = await mainMenu();

  switch (userInput.menuOptions) {
    case "View All Employees":
      // console.log("View All Employees");
      viewEmpTable();
      break;
    case "Add New Employee":
      console.log("Add New Employee");
      addEmp();
      break;
    case "Update Employee Role":
      console.log("Update Employee Role");
      break;
    case "View All Roles":
      // console.log("View All Roles");
      viewRoleTable();
      break;
    case "Add New Role":
      console.log("Add New Role");
      addRole();
      break;
    case "View All Departments":
      // console.log("View All Departments");
      viewDeptTable();
      break;
    case "Add New Department":
      console.log("Add New Department");
      break;
    case "Quit Application":
      // console.log("Quit Application");
      quitApp();
      break;
  }
}

// Functional initializes App
async function init() {
  // dbCreate();
  // dbConnect();
  // await createDeptTable();
  // await createRoleTable();
  // await createEmpTable();
  // await seedDeptTable();
  // await seedRoleTable();
  // await seedEmpTable();

  userInput();
}

async function viewEmpTable() {
  let data = await selectEmpTable();
  // console.log(data).then(() => mainMenu());
  // console.log(data);
  console.table(data);
  userInput();
}

async function addEmp() {
  let data = await newEmp(employee);
  console.log(data);
  userInput();
}

async function addRole() {
  let data = await newRole(role);
  console.log(data);
  userInput();
}

async function viewDeptTable() {
  let data = await selectDeptTable();
  // console.log(data).then(() => mainMenu());
  console.table(data);
  userInput();
}

async function viewRoleTable() {
  let data = await selectRoleTable();
  console.table(data);
  userInput();
}

function quitApp() {
  console.log("You have successfully quit the Employee Tracker.");
  process.exit();
}

// Function call to initialize app
init();
