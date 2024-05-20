const express = require("express");

const {
  User,
  Post,
  Image,
  Comment,
  Like,
  Album,
  AlbumImage,
} = require("../db/models");

const router = express.Router();

router.get("/min", async (req, res) => {
  const minLikes = await Like.min("postId");

  res.json(minLikes);
});

router.get("/max", async (req, res) => {
  const maxLikes = await Like.max("postId");

  res.json(maxLikes);
});

router.get("/count", async (req, res) => {
  const postsCount = await Post.count();

  res.json(postsCount);
});

router.get("/sum", async (req, res) => {
  const likesSum = await Like.sum("postId");

  res.json(likesSum);
});

router.get("/avg", async (req, res) => {
  const sum = await Like.sum("postId");
  const count = await Like.count();

  const likesavg = (await sum) / count;

  res.json(likesavg);
});

module.exports = router;
