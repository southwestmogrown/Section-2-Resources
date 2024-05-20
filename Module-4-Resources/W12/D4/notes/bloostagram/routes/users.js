const express = require("express");
const { Op } = require("sequelize");

const { User, Post } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUsers = await User.findAll();

  res.json(allUsers);
});

router.get("/relationships/:userId", async (req, res) => {
  const userId = req.params.userId;

  const user = await User.findByPk(userId, {
    include: { model: Post },
  });

  res.json(user);
});

router.get("/attributes", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["username", "email"],
  });

  res.json(allUsers);
});
router.get("/where", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["username", "email"],
    where: {
      id: 2,
    },
  });

  res.json(allUsers);
});
router.get("/where/using-op", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["username", "email"],
    where: {
      id: { [Op.in]: [1, 2] },
    },
  });

  res.json(allUsers);
});

router.get("/order", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["username", "email"],
    order: [["firstName", "ASC"]],
  });

  res.json(allUsers);
});

router.get("/find-one/:username", async (req, res) => {
  console.log("hello");
  const username = req.params.username;

  const user = await User.findOne({
    where: {
      username: username,
    },
  });

  res.json(user);
});

router.get("/find-by-pk/:userId", async (req, res) => {
  const userId = req.params.userId;

  console.log("hello");
  const user = await User.findByPk(userId, {
    attributes: ["username", "email"],
  });

  res.json(user);
});

// POST ROUTES

router.post("/build", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  const newUser = User.build({
    username: username,
    firstName: firstName,
    lastName,
    email,
    password,
  });
  await newUser.validate();
  await newUser.save();

  res.json(newUser);
});

router.post("/create", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  const newUser = await User.create({
    username,
    firstName,
    lastName,
    email,
    password,
  });

  res.json(newUser);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);
  const { username, firstName, lastName, email, password } = req.body;

  if (username !== undefined) user.set({ username: username });
  if (firstName !== undefined) user.firstName = firstName;
  if (lastName !== undefined) user.lastName = lastName;
  if (email !== undefined) user.email = email;
  if (password !== undefined) user.password = password;

  await user.save();
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);

  await user.destroy();

  res.json({ message: `Successfully deleted user with id ${id}` });
});

// Getter method

router.get("/getter-method/:userId", async (req, res) => {
  let user = await User.findByPk(req.params.userId);
  // console.log(user);
  let posts = await user.getPosts();
  // let comments = await user.getComment();
  // console.log(posts);

  res.json({
    user,
    posts,
  });
});

// Create Method

router.get("/create-method/:userId", async (req, res) => {
  let user = await User.findByPk(req.params.userId);
  let post = await user.createPost({
    title: "New Post",
    caption: "Good Times",
    imageId: 3,
  });

  res.json({
    message: "Successfully created post",
    post: post,
  });
});

// Check create method
router.get("/posts/:userId", async (req, res) => {
  let user = await User.findByPk(req.params.userId, {
    include: Post,
  });

  res.json(user);
});

module.exports = router;
