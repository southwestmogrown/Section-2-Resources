const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  console.log(request.query)
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

app.get('/create', (req, res) => {
  res.send("Create")
})

app.post('/create', (req, res) => {
  console.log(req.body)
  // need to JSON.stringify the incoming body on chrome with 'fetch'
  res.json(`Hi, my name is ${req.body.name}, and I am a ${req.body.title}`);
})

// const users = [{ name: 'shane'}]
app.get('/users/:userId', (req, res) => {
  console.log(req.params.userId)
  // const user = User.findOne(req.params.userId) => sequelize syntax
  res.send('hello')
})

const PORT = 8000

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));