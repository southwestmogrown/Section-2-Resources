const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();

const { User } = require("../db/models");

// router.get("/", async (req, res) => {
//   const allUsers = await User.findAll();

//   res.json(allUsers);
// });

// router.get("/", async (req, res) => {
//   const allUsers = await User.findAll({
//     attributes: ["id", "username"],
//   });

//   res.json(allUsers);
// });

// router.get("/", async (req, res) => {
//   const allUsers = await User.findAll({
//     attributes: { exclude: ["id", "username"] },
//   });

//   res.json(allUsers);
// });

// router.get("/", async (req, res) => {
//   const allUsers = await User.findAll({
//     attributes: ["id", "username"],
//     where: {
//       username: "bloo",
//     },
//   });

//   res.json(allUsers);
// });

router.get("/", async (req, res) => {
  const allUsers = await User.findAll({
    attributes: ["id", "username"],
    where: {
      id: { [Op.in]: [2, 3] },
    },
    order: [
      ["id", "ASC"],
      ["username", "DESC"],
    ],
  });

  res.json(allUsers);
});

// router.get("/:username", async (req, res) => {
//   const user = await User.findOne({
//     attributes: ["id", "username"],
//     where: {
//       username: req.params.username,
//     },
//   });

//   res.json(user);
// });

router.get("/:userId", async (req, res) => {
  const id = req.params.userId;
  const user = await User.findByPk(id, {
    attributes: ["id", "username"],
  });

  res.json(user);
});

module.exports = router;
