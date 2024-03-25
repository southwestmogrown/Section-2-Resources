const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");
const albumsRouter = require("./routes/albums");
const aggregatesRouter = require("./routes/aggregates");

const app = express();

app.use(express.json());

app.use("/static", express.static("assets"));
// app.use("/styling", express.static("/assets/css/index.css"));

app.use("/users", usersRouter);
app.use("/albums", albumsRouter);
app.use("/aggregates", aggregatesRouter);

// app.get("/assets/css/styles.css", (req, res) => {
//   res.send("howdy");
// });

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
