const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

const writeHtml = user => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Profile Generator</title>
      <style>

      .card{
        background-color: ${colors[user.color].headerBackground};
        color: ${colors[user.color].headerColor};
        margin: 2%;
      }
      
      #biopic{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        margin-top: -75px;
        border: 6px solid ${colors[user.color].photoBorderColor};
        box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
      }
      
      #top{
        background-color: ${colors[user.color].wrapperBackground};
        width: 100%;
        margin-bottom: 3%;
        padding: 2%;
      }

      a{
        font-size: 1.2vw;
      }
      
      .jumbotron{
        padding: 5%;
      }
      
      #imgrow{
        position:relative;
        top:5vw;
        background-color: ${colors[user.color].headerBackground};
        color: ${colors[user.color].headerColor};
      }
      
        
         

         
         
      </style>

    </head>
    <body>
        <div id="top">
          <div class="container">
            <div class="jumbotron" id="jumbotronid">
              <div class="row">
                <div class="col-12 text-center">
                  <h1 class="mx-auto">
                    ${user.name}
                  </h1>
                </div>
              </div>
              <div class="row">
                <div class="col-12 text-center">
                  <h2 class="mx-auto">
                    Github Username: <a href="https://www.github.com/${user.username}">${user.username}</a>
                  </h2>
                </div>
              </div>
              <div class="row">
              <div class="col-12 text-center">
                  <h3 class="mx-auto">
                    ${user.bio}
                  </h3>
              </div>
            </div>
              <div class="row" id="imgrow">
                <div class="col-12 text-center photo-header">
                    <img src="${user.imgURL}" alt="Profile Picture" id="biopic">
                </div>
              </div>
              <div class="row">
                <div class="col-6 text-center"><a href="https://www.google.com/maps?q=${user.location}"><i class="fas fa-location-arrow"></i>${user.location}</a></div>
                <div class="col-3 text-right"><a href="https://www.github.com/${user.username}"><i class="fab fa-github-alt"></i></a></div>
                <div class="col-3 text-center"><a href="${user.blog}"><i class="fas fa-globe"></i></a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 text-center">
            <div class="card">
              <h3 class="mx-auto">
                Public Repos: ${user.repos}
              </h3>
            </div>
          </div>
          <div class="col-6 text-center">
            <div class="card">
              <h3 class="mx-auto">
                Starred Repos: ${user.starred}
              </h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6 text-center">
            <div class="card">
              <h3 class="mx-auto">
                Followers: ${user.followers}
              </h3>
            </div>
          </div>
          <div class="col-6 text-center">
            <div class="card">
              <h3 class="mx-auto">
                Following: ${user.following}
              </h3>
            </div>
      </div>
      </div>
    </body>
  </html>`;
};

exports.writeHtml = writeHtml;
