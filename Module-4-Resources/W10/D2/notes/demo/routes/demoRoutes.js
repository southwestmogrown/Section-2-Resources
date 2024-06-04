const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log("Passing through the Demo Router global middleware")
  next()
})

router.get('/', (req, res) => {
  res.send("Hello from our Demo router");
});


router.get('/error', (req, res, next) => {
  const err = new TypeError("Purposely creating an error");
  err.statusCode = 401;
  next(err)
});

router.get('/:id/comments', (req, res) => {
  const id = req.params.id;

  res.send("Hitting route for specific resource by id " + id);
});

module.exports = router