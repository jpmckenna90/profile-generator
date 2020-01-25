const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What is your github username?",
      name: "username"
    },
    {
      type: "input",
      message: "What's your favorite color?",
      name: "color"
    }
  ])
  .then(function(response) {
    console.log(response);
  });
