const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("this is the router's global middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("Howdy, from our router.");
});

router.get("/error", (req, res, next) => {
  const err = new Error("this is an error from our router");
  err.statusCode = 401;
  next(err);
});
router.get("/:id", (req, res) => {
  res.send("Hello from a specific user");
});

module.exports = router;
