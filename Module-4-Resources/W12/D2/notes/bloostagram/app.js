const express = require("express");
require("dotenv").config();
const { User, Post } = require("./db/models");

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

// app.get("/pagination", async (req, res) => {
//   let { size, page } = req.query;

//   if (!page) page = 1;
//   if (!size) size = 5;

//   const pagination = {};

//   if (size > 0 && page > 0) {
//     pagination.limit = size;
//     pagination.offset = size * (page - 1);
//   }

//   const posts = await Post.findAll({ ...pagination });

//   res.json(posts);
// });

// covering edge cases
app.get("/pagination", async (req, res) => {
  let { size, page } = req.query;

  size = Math.floor(+size); // => parseInt(size)
  page = Math.floor(+page); // => parseInt(page)

  if (isNaN(page) || page < 1) page = 1;
  if (isNaN(size) || size < 1) size = 5;

  const pagination = {};

  pagination.limit = size;
  pagination.offset = size * (page - 1);

  const posts = await Post.findAll({ ...pagination });

  res.json(posts);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
