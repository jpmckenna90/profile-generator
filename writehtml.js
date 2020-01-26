import User from "index.js";

export const html = `<!DOCTYPE html>
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
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mx-auto">
            ${User.name}
          </h1>
        </div>
      </div>
    </div>
  </body>
</html>
`;

console.log(html);