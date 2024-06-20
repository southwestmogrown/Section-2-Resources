const express = require("express");
require("dotenv").config();
const { User, Post } = require("./db/models");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

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

app.get("/queries", async (req, res) => {
  const { title, imageId, userId } = req.query;

  const queryObj = {
    where: {},
    include: [],
  };

  if (title) {
    queryObj.where.title = {
      [Op.substring]: title,
    };
  }

  if (imageId) {
    queryObj.where.imageId = {
      [Op.gte]: imageId,
    };
  }

  if (userId) {
    queryObj.include.push({
      model: User,
      where: {
        id: userId,
      },
    });
  }

  const posts = await Post.findAll({ ...queryObj });

  res.json(posts);
});

const setTokenCookie = (res, user) => {
  // Create the token.
  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };
  const token = jwt.sign(
    { data: safeUser },
    process.env.JWT_SECRET,
    { expiresIn: parseInt(process.env.JWT_EXPIRES_IN) } // 604,800 seconds = 1 week
  );

  // Set the token cookie
  res.cookie("token", token, {
    maxAge: process.env.JWT_EXPIRES_IN * 1000, // maxAge in milliseconds
    httpOnly: true,
  });

  return token;
};

app.post("/", async (req, res) => {
  // user sign up
  const { email, password, firstName, lastName, username } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 12);
  const user = await User.create({
    email,
    username,
    firstName,
    lastName,
    password: hashedPassword,
  });

  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

router.post("/", async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await User.unscoped().findOne({
    where: {
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
  });

  if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
    const err = new Error("Login failed");
    err.status = 401;
    err.title = "Login failed";
    err.errors = { credential: "The provided credentials were invalid." };
    return next(err);
  }

  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

app.use((err, req, res, next) => {
  res.json(err);
});
const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
