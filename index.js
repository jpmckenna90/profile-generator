const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const newHtml = require("./writehtml.js"); 
const questions = [
   {
    type: "input",
    message: "What is your Github username?",
    name: "username"
  },
  {
    type: "list",
    message: "What's your favorite color?",
    name: "color",
    choices: ["green", "blue", "pink", "red"]
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
  followers,
  starred,
  color
) {
  (this.name = name),
    (this.username = username),
    (this.imgURL = imgURL),
    (this.bio = bio),
    (this.location = location),
    (this.repos = repos),
    (this.following = following),
    (this.followers = followers);
    (this.starred = starred);
    (this.color = color);
}

inquirer.prompt(questions).then(function({ username, color }) {
  console.log(username, color);
  const queryUrl = `https://api.github.com/users/${username}`;
  const starredUrl = `https://api.github.com/users/${username}/starred`;
  
  axios.get(queryUrl).then(res => {
    // Gather all data from axios response to pass into constructor
    const name = res.data.name;
    const username = res.data.login;
    const imgURL = res.data.avatar_url;
    const bio = res.data.bio;
    const location = res.data.location;
    const repos = res.data.public_repos;
    const followers = res.data.followers;
    const following = res.data.following;

    axios.get(starredUrl).then(res => {
      // Get # of starred repos from starredUrl axios call
      const starred = res.data.length
      
      const user = new User(
        name,
        username,
        imgURL,
        bio,
        location,
        repos,
        followers,
        following,
        starred,
        color
      );
      console.log(user);

      // Create HTML file from user info
      const myFile = newHtml.writeHtml(user);
      fs.writeFile(`${user.username}.html`, myFile, err => {
        if (err) {
          console.log(err);
        }
      });
    });
  });
});
