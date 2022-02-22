const inquirer = require('inquirer');
const express = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Cxzshww1.',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

function options() {
  inquirer.prompt({
    name:'options',
    type:'list',
    message:'What would you like to do?',
    choices: [
      'view all departments',
      'view all roles', 
      'view all employees', 
      'add a department',
      'add a role', 
      'add an employee',
      'update an employee role',
      'Exit'
    ]
  }).then(answer => {
    switch(answer.options) {
      case 'view all departments':
        viewDepartment();
        break;

      case 'view all roles':
        viewRole();
        break;

      case 'view all employees':
        viewEmployee();
        break;
      
      case 'add a department':
        addDepartment();
        break;

      case 'add a role':
        addRole();
        break;

      case 'add an employee':
        addEmployee();
        break;

      case 'update an employee role':
        updateRole();
        break;
    }
  });
}

function viewDepartment() {

}

function viewRole() {

}

function viewEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateRole() {
  
}
