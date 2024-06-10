const express = require("express");
require("dotenv").config();
const app = express();

const { Student } = require("./db/models");

app.use(express.json());

app.get("/students", async (req, res) => {
  const allStudents = await Student.findAll();

  res.json(allStudents);
});

app.get("/students/:id", async (req, res) => {
  const singleStood = await Student.findByPk(req.params.id);

  res.json(singleStood);
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
