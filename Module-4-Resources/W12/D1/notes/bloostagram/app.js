const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");
const albumsRouter = require("./routes/albums");
const aggregatesRouter = require("./routes/aggregates");
const associationMethodsRouter = require("./routes/association-methods");

const app = express();

app.use(express.json());

app.use(express.static("assets/css"));
app.use(express.static("assets/images"));
app.use("/just-scripts", express.static("assets/js"));

app.get("/", (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/index.css">
        <title>April '24</title>
      </head>
      <body>
        <h1>Hello World</h1>
        <img class='demo-img' src='/schema.png'/>
      </body>
    </html>`
  );
});

app.use("/users", usersRouter);
app.use("/albums", albumsRouter);
app.use("/aggregates", aggregatesRouter);
app.use("/association-methods", associationMethodsRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
