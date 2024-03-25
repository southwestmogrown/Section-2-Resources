const express = require("express");
const app = express();

// wrong =>  localhost:5000/stylesheets/assets/css/application.css
// right => localhost:5000/stylesheets/application.css
app.use("/stylesheets", express.static("assets/css/"));

// app.use(express.static("assets"));

app.use(express.static("assets/scripts"));

// BONUS
app.use("/stickers", express.static("assets/images"));

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
