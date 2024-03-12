const express = require("express");

const demosRouter = require("./routes/demos");
const app = express();

app.use(express.json());

app.use("/demos", demosRouter);
// app.use((req, res, next) => {
//   console.log("error test");
//   const error = new Error("Credentials are incorrect");
//   error.statusCode = 401;
//   next(error);
// });

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
  console.log("error test");
  const error = new Error("Credentials are incorrect");
  error.statusCode = 401;
  next(error);
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
  throw new Error();
  // res.send("hello from a long url");
});

app.use((req, res, next) => {
  const notFoundErr = new Error(`${req.path} not found.`);
  notFoundErr.statusCode = 404;
  next(notFoundErr);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  const status = err.statusCode ?? 500;
  res.status(status);
  res.json({
    message: err.message || "Something went wrong...",
    status,
  });
});

// app.use((err, req, res, next) => {
//   const { message, statusCode } = err;
//   console.log(message, statusCode);
//   res.send({ message, statusCode });
// });

app.listen(5000, () => console.log(`Listening on port ${5000}...`));
