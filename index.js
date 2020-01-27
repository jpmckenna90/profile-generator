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

// import writeHtml from "./writehtml.js";

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

// const writeHtml = user => {
//   return `<!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//       <link
//         rel="stylesheet"
//         href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//         integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//         crossorigin="anonymous"
//       />
//       <title>Profile Generator</title>
//       <link rel="stylesheet" href="style.css">
//     </head>
//     <body>
//         <div id="top">
//           <div class="container">
//             <div class="jumbotron" id="jumbotronid">
//               <div class="row">
//                 <div class="col-12 text-center">
//                   <h1 class="mx-auto">
//                     ${user.name}
//                   </h1>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col-12 text-center">
//                   <h2 class="mx-auto">
//                     Github Username: ${user.username}
//                   </h2>
//                 </div>
//               </div>
//               <div class="row">
//               <div class="col-12 text-center">
//                   <h3 class="mx-auto">
//                     ${user.bio}
//                   </h3>
//               </div>
//             </div>
//               <div class="row" id="imgrow">
//                 <div class="col-12 text-center">
//                   <h2 class="mx-auto">
//                     <img src="${user.imgURL}" alt="Profile Picture" id="biopic">
//                   </h2>
//                 </div>
//               </div>
//               <div class="row">
//                 <div class="col-3 text-center">
//                   <h4>
//                     ${user.location}
//                   </h4>
//                 </div>
//                 <div class="col-6"></div>
//                 <div class="col-3 text-center">
//                   <a href="https://www.github.com/${user.username}">Github</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-6 text-center">
//             <div class="card">
//               <h3 class="mx-auto">
//                 Public Repos: ${user.repos}
//               </h3>
//             </div>
//           </div>
//           <div class="col-6 text-center">
//             <div class="card">
//               <h3 class="mx-auto">
//                 Starred Repos: ${user.starred}
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div class="row">
//           <div class="col-6 text-center">
//             <div class="card">
//               <h3 class="mx-auto">
//                 Followers: ${user.followers}
//               </h3>
//             </div>
//           </div>
//           <div class="col-6 text-center">
//             <div class="card">
//               <h3 class="mx-auto">
//                 Following: ${user.following}
//               </h3>
//             </div>
//       </div>
//     </body>
//   </html>`;
// };

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
