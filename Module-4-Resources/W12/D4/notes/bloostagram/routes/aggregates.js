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
  Rating,
} = require("../db/models");

router.get("/min", async (req, res) => {
  const min = await Rating.min("rating");

  res.json(min);
});
router.get("/max", async (req, res) => {
  const max = await Rating.max("rating");

  res.json(max);
});

router.get("/count", async (req, res) => {
  const count = await Rating.count();

  res.json(count);
});
router.get("/sum", async (req, res) => {
  const sum = await Rating.sum("rating");

  res.json(sum);
});

router.get("/:imageId/average", async (req, res) => {
  const sum = await Rating.sum("rating", {
    where: {
      imageId: req.params.imageId,
    },
  });
  const image = await Image.findByPk(req.params.imageId);
  const ratings = await image.getRatings();

  const average = sum / ratings.length;

  const imageObj = {
    ...image.toJSON(),
    averageRating: average.toFixed(2),
  };

  res.json(imageObj);
});

module.exports = router;
