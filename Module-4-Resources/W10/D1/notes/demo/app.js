const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (_req, res) => {
  console.log("Hello world");
  res.send("Hello from your first express application");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
