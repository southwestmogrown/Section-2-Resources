const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Hello world</h1>')
});

app.get('/friends-page', (req, res) => {
  res.send('<h1>Friends Page</h1>');
});

app.get('/json', (req, res) => {

  res.json({
    name: "Shane", 
    age: 42
  })
})

// app.get('/create', (req, res) => {
//   res.send("Create")
// })

app.post('/create', (req, res) => {
  // console.log(req.body)
  // console.log(res)
  // acts funny on chrome with 'fetch', but works with postman
  res.json(`Hi, my name is ${req.body.name}, and I am a ${req.body.title}`);
})

const PORT = 8000

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));