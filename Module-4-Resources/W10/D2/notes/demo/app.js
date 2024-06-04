const express = require("express");
const app = express();
const demoRouter = require("./routes/demoRoutes");
require('dotenv').config()

// console.log(process.env.MESSAGE)
// console.log(process.env.DATABASE_URL)

app.use(express.json());

// app.use('/users', (req, res) => {
//   console.log(req)
// })

app.use("/demo",demoRouter)
// app.use("/demo",demoRouter)
// app.use("/demo",demoRouter)
// app.use("/demo",demoRouter)
// app.use("/demo",demoRouter)

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
    return res.send("Please include a stuff property.");
  }
  next();
};

app.get('/', printPath, checkUserInput3, (req, res) => {
  res.send('hello from root')
})

app.post('/', checkUserInput3, (req, res) => {
  res.send('hello from root')
})

// app.use((req, res, next) => {
//   console.log('error test');
//   const error = 'There was an error :(';
//   // const error = new Error("whatever message")
//   next(error);
// });

app.get('/users', (req, res) => {
  res.send("hello from users route")
})

app.get('/albums', (req, res) => {
  res.send("hello from albums route")
})

app.use((req, res, next) => {
  const notFoundErr = new Error(`${req.path} was not found`);
  notFoundErr.statusCode = 404;
  next(notFoundErr)
})

// app.use((err, req, res, next) => {
//   console.log(err)
//   next()
// })

// app.get("/error", (req, res) => {
//   res.send("hello from /error")
// })

// app.use((req, res, next) => {
//   console.log('error test');
//   const error = new Error('There was an error :(');
//   error.statusCode = 401;
//   next(error);
// });

app.use((err, req, res, next) => {
  console.log(err.message);
  const status = err.statusCode || 500;
  res.status(status);
  res.json({
      message: err.message || 'Something went wrong...',
      status
  });
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`))