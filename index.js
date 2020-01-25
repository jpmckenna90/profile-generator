const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

// constructor
function User(name, username, imgURL, bio, location, repos, following, followers){ //// ! DON'T FORGET TO DO STARS - doesn't appear to be in res.data 
  this.name = name,
  this.username = username,
  this.imgURL = imgURL,
  this.bio = bio,
  this.location = location,
  this.repos = repos,
  this.following = following,
  this.followers = followers
  // this.stars = stars
}


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

      // Gather all data from axios response to pass into constructor
      const name = res.data.name;
      const username = res.data.login;
      const imgURL = res.data.avatar_url;
      const bio = res.data.bio;
      const location = res.data.location;
      const repos = res.data.public_repos;
      const followers = res.data.followers;
      const following = res.data.following;
      // ! DON'T FORGET TO DO STARS - doesn't appear to be in res.data 

      // Create new user with constructor 
      const user = new User(name, username, imgURL, bio, location, repos, followers, following);
      console.log(user);

    })
  });
// .then(function(response) {
//   console.log(response);
// });
