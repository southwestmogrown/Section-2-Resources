const express = require("express");

const app = express();

app.use(express.json());

const PORT = 5000;

// app.use((req, res, next) => {
//   console.log("Hello from app.use");
//   next();
// });

const testMiddleware = (req, res, next) => {
  console.log("Hello from our test middleware");
  next();
};

// app.all("/", (req, res) => {
//   console.log("Hello from app.all");
//   res.send("app.all");
// });

app.get("/", testMiddleware, (_req, res) => {
  console.log("Hello world");
  res.send("Hello from our first express app");
});

app.get(["/some-resource", "/some-resource/*"], (_req, res) => {
  const obj = {
    name: "Shane",
    title: "Section Lead",
  };
  res.json(obj);
});

app.post("/create", (req, res) => {
  const { name, title } = req.body;
  //   res.json(`Hi, my name is ${name}, and I am a ${title}`);
  res.json(`Hi, my name is ${name}, and I am a ${title}`);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
