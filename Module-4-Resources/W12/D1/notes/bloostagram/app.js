const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");
const albumsRouter = require("./routes/albums");
const aggregatesRouter = require("./routes/aggregates");
const associationMethodsRouter = require("./routes/association-methods");

const app = express();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/albums", albumsRouter);
app.use("/aggregates", aggregatesRouter);
app.use("/association-methods", associationMethodsRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
