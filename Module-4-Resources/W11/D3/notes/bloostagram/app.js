const express = require("express");
require("dotenv").config();

const usersRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use("/users", usersRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
