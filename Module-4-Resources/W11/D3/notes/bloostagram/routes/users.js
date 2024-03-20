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

module.exports = router;
