const express = require("express");

const app = express();

app.use(express.json());
// app.use('/users', (req, res) => {
//   console.log(req)
// })

const printPath = (req, res, next) => {
  console.log(`path: ${req.path}`);
  next()
};


const checkUserInput1 = (req, res, next) => {

  // console.log(req.body)
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

app.post('/', checkUserInput3, (req, res) => {
  res.send('hello from root')
})

app.use((req, res, next) => {
  console.log('error test');
  const error = 'There was an error :(';
  // const error = new Error("whatever message")
  next(error);
});

app.get('/error', (req, res) => {
  res.send("will not make it here")
})

app.use((err, req, res, next) => {
  console.log(err)
  next()
})

app.get("/error", (req, res) => {
  res.send("hello from /error")
})

app.listen(8000, () => console.log("Listening on port 8000..."))