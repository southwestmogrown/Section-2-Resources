const express = require("express");
const { Op } = require("sequelize");

const { User, Post } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUsers = await User.scope("onlyUserNameAndId").findAll();

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

// Create
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

// update
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

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findByPk(id);

  await user.destroy();

  res.json({ message: `Successfully deleted user with id ${id}` });
});

// Getter methods => Database record instance method
router.get("/:userId/likes", async (req, res) => {
  const user = await User.findByPk(req.params.userId, {
    attributes: ["id", "username"],
  });

  const likes = await user.getLikes();
  const comments = await user.getComments({
    attributes: ["body"],
  });

  console.log(user);
  const jsonUser = await user.toJSON();
  const jsonLikes = likes.map((like) => like.toJSON());
  const jsonComments = comments.map((comment) => comment.toJSON());

  jsonUser.Likes = jsonLikes;
  jsonUser.Comments = jsonComments;

  res.json(jsonUser);
});

// Create methods => Database record instance method
router.post("/:id/posts", async (req, res) => {
  const user = await User.findByPk(req.params.id, {
    attributes: ["id", "username"],
  });

  // const newPost = await user.createPost({
  //   title: "New Post",
  //   caption: "Good Times",
  //   imageId: 3,
  // });

  const newPost = await user.createPost({ ...req.body });

  res.json({ user, newPost });
});

router.get("/:userId/posts", async (req, res) => {
  const user = await User.scope({
    method: ["includeUserPosts", req.params.userId],
  }).findByPk(req.params.userId);

  res.json(user);
});

router.get("/:userId", async (req, res) => {
  const user = await User.findByPk(req.params.userId);

  res.json(user);
});

module.exports = router;
