const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("We made it!");
});

module.exports = app;
