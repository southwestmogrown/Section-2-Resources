const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");
const albumsRouter = require("./routes/albums");
const aggregatesRouter = require("./routes/aggregates");

const app = express();

app.use(express.json());

// url => 'http://localhost:5000/static/css/index.css
// url => 'http://localhost:5000/static/images/schema.png
// url => 'http://localhost:5000/static/js/index.js
// app.use("/static", express.static("assets"));

// url => 'http://localhost:5000/css/index.css
// url => 'http://localhost:5000/images/schema.png
// url => 'http://localhost:5000/js/index.js
// app.use(express.static("assets"));

// url => 'http://localhost:5000/index.css
// app.use('/just-css', express.static("assets/css"));

// url => 'http://localhost:5000/schema.png
// app.use('/just-images', express.static("assets/images"));

// url => 'http://localhost:5000/index.js
// app.use('/just-scripts', express.static("assets/js"));

app.use("/users", usersRouter);
app.use("/albums", albumsRouter);
app.use("/aggregates", aggregatesRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
