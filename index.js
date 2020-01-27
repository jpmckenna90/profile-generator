const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const newHtml = require("./writehtml.js"); //make this work!
const questions = [
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
];

// constructor
function User(
  name,
  username,
  imgURL,
  bio,
  location,
  repos,
  following,
  followers
) {
  (this.name = name),
    (this.username = username),
    (this.imgURL = imgURL),
    (this.bio = bio),
    (this.location = location),
    (this.repos = repos),
    (this.following = following),
    (this.followers = followers);
}

inquirer.prompt(questions).then(function({ username }) {
  const queryUrl = `https://api.github.com/users/${username}`;
  const starredUrl = `https://api.github.com/users/${username}/starred`;

  axios.get(queryUrl).then(function(res) {
    // Gather all data from axios response to pass into constructor
    const name = res.data.name;
    const username = res.data.login;
    const imgURL = res.data.avatar_url;
    const bio = res.data.bio;
    const location = res.data.location;
    const repos = res.data.public_repos;
    const followers = res.data.followers;
    const following = res.data.following;

    // Create new user with constructor
    const user = new User(
      name,
      username,
      imgURL,
      bio,
      location,
      repos,
      followers,
      following
    );

    // Axios call for starred URL
    axios.get(starredUrl).then(function(res) {
      // Add starred property to user object
      user["starred"] = res.data.length;

      // Create HTML file from user info
      const myFile = newHtml.writeHtml(user);
      fs.writeFile(`${user.username}.html`, myFile, function(err) {
        if (err) {
          console.log(err);
        }
      });
    });
  });
});
