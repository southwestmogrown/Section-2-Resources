const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();

const { User, Post, Like, Comment } = require("../db/models");

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

router.get("/:userId/posts", async (req, res) => {
  const user = await User.findByPk(req.params.userId, {
    attributes: ["username", "id"],
    // include: Post,
    // include: [Post, Like, Comment],
    include: {
      model: Post,
      attributes: { exclude: ["createdAt", "updatedAt"] },
    },
  });

  res.json(user);
});

router.post("/build", async (req, res) => {
  const { username, firstName, lastName, email, password } = req.body;

  const newUser = User.build({
    username,
    firstName,
    lastName,
    email,
    password,
  });

  await newUser.validate();
  await newUser.save();

  const safeObj = {
    username: newUser.username,
    id: newUser.id,
  };

  res.json({
    msg: "Success",
    user: safeObj,
  });
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

  const safeObj = {
    username: newUser.username,
    id: newUser.id,
  };

  res.json({
    msg: "Success",
    user: safeObj,
  });
});

router.put("/:userId", async (req, res) => {
  const { username, firstName, lastName, email } = req.body;
  const userToUpdate = await User.findByPk(req.params.userId);
  // userToUpdate.update({ ...req.body });
  // using set method
  if (username !== undefined) userToUpdate.set({ username: username });
  // using direct object key value reassignment
  if (firstName !== undefined) userToUpdate.firstName = firstName;
  if (lastName !== undefined) userToUpdate.lastName = lastName;
  if (email !== undefined) userToUpdate.email = email;

  await userToUpdate.save();

  res.json({
    msg: "Successfully updated the user",
    userToUpdate,
  });
});

router.delete("/:userId", async (req, res) => {
  const userToDelete = await User.findByPk(req.params.userId);

  await userToDelete.destroy();
  res.json({
    message: `Succussfully deleted user with id ${req.params.userId}`,
  });
});

module.exports = router;
