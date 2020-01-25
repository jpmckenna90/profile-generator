const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

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
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`
    axios.get(queryUrl).then(function(res){
      console.log(res.data)
    })
  });
// .then(function(response) {
//   console.log(response);
// });
