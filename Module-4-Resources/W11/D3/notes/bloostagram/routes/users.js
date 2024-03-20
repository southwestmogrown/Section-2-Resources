const express = require("express");
const { Op } = require("sequelize");

const { User } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const allUsers = await User.findAll();

  res.json(allUsers);
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

module.exports = router;
