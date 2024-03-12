const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET / This is the root URL");
});

app.use((req, res, next) => {
  const error = new Error("Sorry, the requested resource couldn't be found");
  error.statusCode = 404;
  // res.json({
  //   message: error.message,
  //   status: error.statusCode,
  // });
  next(error);
});

app.use((err, _req, res, _next) => {
  console.log(err);
  const status = err.statusCode ?? 500;
  res.status(status);
  res.json({
    message: err.message || "Something went wrong...",
    status,
  });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
