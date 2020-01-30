const fs = require("fs"),
  convertFactory = require("electron-html-to");
const inquirer = require("inquirer");
const axios = require("axios");
const newHtml = require("./writehtml.js");
var conversion = convertFactory({
  converterPath: convertFactory.converters.PDF
});

// const pdf = require("html-pdf");
// const options = {orientation: 'landscape'}

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
  color,
  blog
) {
  (this.name = name),
    (this.username = username),
    (this.imgURL = imgURL),
    (this.bio = bio),
    (this.location = location),
    (this.repos = repos),
    (this.following = following),
    (this.followers = followers),
    (this.starred = starred),
    (this.color = color),
    (this.blog = blog);
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
    const blog = res.data.blog;

    axios.get(starredUrl).then(res => {
      // Get # of starred repos from starredUrl axios call
      const starred = res.data.length;

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
        color,
        blog
      );

      // Create HTML file from user info
      const myFile = newHtml.writeHtml(user);
      fs.writeFile("profile.html", myFile, err => {
        if (err) {
          console.log(err);
        }
      });

      conversion({ html: myFile }, function(err, result) {
        if (err) {
          return console.error(err);
        }
        result.stream.pipe(fs.createWriteStream("./profile.pdf"));
        conversion.kill();
      });
    });
  });
});
