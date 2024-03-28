const express = require("express");
const { Op } = require("sequelize");
require("dotenv").config();

const usersRouter = require("./routes/users");
const albumsRouter = require("./routes/albums");
const aggregatesRouter = require("./routes/aggregates");

const { Post, Comment, User } = require("./db/models");

const app = express();

app.use(express.json());

// url => 'http://localhost:5000/static/css/index.css
// url => 'http://localhost:5000/static/images/schema.png
// url => 'http://localhost:5000/static/js/index.js
// app.use("/static", express.static("assets"));

// url => 'http://localhost:5000/css/index.css
// url => 'http://localhost:5000/images/schema.png
// url => 'http://localhost:5000/js/index.js
// app.use(express.static("assets"));

// url => 'http://localhost:5000/index.css
// app.use('/just-css', express.static("assets/css"));

// url => 'http://localhost:5000/schema.png
// app.use('/just-images', express.static("assets/images"));

// url => 'http://localhost:5000/index.js
// app.use('/just-scripts', express.static("assets/js"));

app.use("/users", usersRouter);
app.use("/albums", albumsRouter);
app.use("/aggregates", aggregatesRouter);

app.get("/pagination", async (req, res) => {
  let { page, size } = req.query;

  if (!page) page = 1;
  if (!size) size = 5;

  page = parseInt(page);
  size = parseInt(size);

  const pagination = {};

  if (size > 0 && page > 0) {
    (pagination.limit = size), (pagination.offset = size * (page - 1));
  }

  const allPosts = await Post.findAll({
    // limit: size,
    // offset: size * (page - 1),
    ...pagination,
  });

  res.json(allPosts);
});

app.get("/queries", async (req, res) => {
  const { titleToMatch, maxImageId, userIdToFind } = req.query;

  const queryObj = {
    where: {},
    include: [],
  };

  if (titleToMatch) {
    queryObj.where.title = { [Op.substring]: titleToMatch };
  }

  if (maxImageId) {
    queryObj.where.imageId = { [Op.gte]: maxImageId };
  }

  // if (userIdToFind) {
  // }
  queryObj.include.push({
    model: Comment,
    // where: {
    //   userId: parseInt(userIdToFind),
    // },
  });

  const posts = await Post.findAll({
    ...queryObj,
  });

  res.json(posts);
});

// app.get("/scopes", async (req, res) => {
//   const users = await User.findAll(); // only use defaultScope

//   res.json(users);
// });

app.get("/scopes", async (req, res) => {
  const users = await User.scope("onlyNameAndId").findAll(); // only use the named scope

  res.json(users);
});

app.get("/scopes/:userId", async (req, res) => {
  const user = await User.scope([
    "defaultScope",
    { method: ["includePosts", req.params.userId] },
  ]).findOne({
    where: {
      id: req.params.userId,
    },
  });

  res.json(user);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
