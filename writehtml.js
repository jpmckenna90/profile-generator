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
      <title>Profile Generator</title>
      <link rel="stylesheet" href="style.css">
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
                    Github Username: ${user.username}
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
                <div class="col-12 text-center">
                  <h2 class="mx-auto">
                    <img src="${user.imgURL}" alt="Profile Picture" id="biopic">
                  </h2>
                </div>
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
                Starred Repos Here!
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
    </body>
  </html>`;
};

exports.writeHtml = writeHtml;