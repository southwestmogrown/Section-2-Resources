const express = require("express");

const app = express();

app.use(express.json());

const printPath = (req, res, next) => {
  console.log(`path: ${req.path}`);
  next();
};

app.use(printPath);

const checkUserInput1 = (req, res, next) => {
  if (req.body.stuff) {
    next();
  } else {
    res.send("Please include a stuff property.");
  }
};

const checkUserInput2 = (req, res, next) => {
  if (!req.body.stuff) {
    res.send("Please include a stuff property.");
  } else {
    next();
  }
};

const checkUserInput3 = (req, res, next) => {
  if (!req.body.stuff) {
    res.send("Please include a stuff property.");
  }
  next();
};

const errorHandler = (req, res, next) => {
  if (!req.body.stuff) {
    console.log("error test");
    const error = "There was an error :(";
    next(error);
  } else {
    next();
  }
};

app.get(
  "/",
  /*printPath,*/
  errorHandler,
  (req, res) => {
    // console.log("hello from root");
    res.send("Hello from root");
  }
);

app.get("/some/real/long/url", (req, res) => {
  res.send("hello from a long url");
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(5000, () => console.log(`Listening on port ${5000}...`));
