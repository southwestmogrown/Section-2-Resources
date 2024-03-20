const express = require("express");

const { Album, Image } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const albums = await Album.findAll({
    include: Image,
  });

  res.json(albums);
});

module.exports = router;
