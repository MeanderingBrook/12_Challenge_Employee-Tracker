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
  newRole,
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

// Executes dependent Functions based upon User's Main Menu selections
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
      // console.log("Add New Role");
      await addRole();
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

// Functions executed only once to initialize App
async function init() {
  // await dbCreate();
  // await dbConnect();
  await createDeptTable();
  await createRoleTable();
  await createEmpTable();
  await seedDeptTable();
  await seedRoleTable();
  await seedEmpTable();
}

async function exe() {
  userInput();
}

async function cont() {
  userInput();
}

async function viewEmpTable() {
  let data = await selectEmpTable();
  // console.log(data).then(() => mainMenu());
  console.table(data);
  userInput();
}

async function addEmp() {
  // let res = await newEmp();
  await newEmp();
  // console.log(res);
  // let data = await newEmp(employee);
  // console.table(data);
  userInput();
}

async function addRole() {
  // let data = await newRole();
  // console.table(data);
  await newRole();
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

// Function call to initialize app, only executed once (e.g., Create Tables, Seed Tables)
// init();

// Function call to execute app for User
exe();
