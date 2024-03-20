const express = require("express");

const { Album, Image, AlbumImage } = require("../db/models");

const router = express.Router();

router.get("/", async (req, res) => {
  const albums = await Album.findAll({
    include: Image,
  });

  res.json(albums);
});

router.get("/lazy/:id", async (req, res) => {
  const album = await Album.findByPk(req.params.id);

  const images = await Image.findAll({
    through: {
      AlbumImage,
      where: {
        albumId: album.id,
      },
    },
  });

  const returnObj = {
    album,
    images,
  };

  res.json(returnObj);
});

router.get("/eager/:id", async (req, res) => {
  const album = await Album.findByPk(req.params.id, {
    include: {
      model: Image,
    },
  });

  res.json(album);
});

module.exports = router;
