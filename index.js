const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  }]).then(function(response) {
    console.log(response);
  })

