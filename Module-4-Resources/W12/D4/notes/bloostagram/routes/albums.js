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

// Add method => Database record instance method
router.post("/:albumId/images/:imageId", async (req, res) => {
  const album = await Album.findByPk(req.params.albumId);

  await album.addImage(req.params.imageId);

  const images = await album.getImages({
    attributes: ["imageUrl"],
  });

  const albumJson = album.toJSON();
  const jsonImages = images.map((image) => image.toJSON());
  albumJson.Images = [];
  jsonImages.forEach((image) => albumJson.Images.push(image.imageUrl));

  res.json(albumJson);
});

module.exports = router;
