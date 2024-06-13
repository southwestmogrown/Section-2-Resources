const express = require("express");
const router = express.Router();

const {
  User,
  Post,
  Image,
  Comment,
  Like,
  Album,
  AlbumImage,
} = require("../db/models");

module.exports = router;
