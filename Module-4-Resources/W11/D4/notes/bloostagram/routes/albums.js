const express = require("express");

const { Op } = require("sequelize");

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

  const albumImages = await AlbumImage.findAll({
    where: {
      albumId: album.id,
    },
  });

  const albumImageIds = albumImages.map((albumImage) => albumImage.imageId);

  const images = await Image.findAll({
    where: {
      id: { [Op.in]: albumImageIds },
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
