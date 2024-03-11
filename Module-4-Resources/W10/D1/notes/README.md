# Welcome to Mod 4

Tips for the students

- Homework - The lectures build upon the homework instead of just reiterating. If you do not do the homework, you will not be able to keep up.
- Practice! - At this point, you will have learned enough to be able to practice as much as you want by just creating backends for whatever you want.
- Debugging - Debugging code is just as important as being able to write it in the first place. You should embrace every chance you can to debug their own code as well as their peer's code.
- Pair Programming - Taken extremely seriously in Mod 4. We are covering a lot of material in a short amount of time, and working with others is a great way to absorb the info.
- Prepare for the next day - Set up any short practices the night before so that you can make the most out of the Short Practice time.

## This is job training, not school. At this point, you are learning skills that you could be directly applying to a job.

Basic layout of how class will go:

- Lecture/Demo
- Short Practice
- Discussion about SP
- Repeat

Monday is busy and we empathize with you about being tired, but that we must get through some lecture for the day.

## Frontend

UI/UX, dealing with visuals, fetching (requests), and requesting data from server
Develop Requests, Handle Responses

## Backend

Server sending data to client, data storage/handling, routing, efficiency, security, DBs
Handle Requests, Develop Responses

## What is an API?

Application Programming Interface

Tool for delivering data, creating a way for a user to interact with data

## What is a Framework?

Structure/blueprint around which we build something else

## What is Express?

API Framework

A backend is just a framework or skeleton that a project or site is built around

## Steps to start with Express

1. Initialize node
   `npm init -y`

2. Install packages

- Express - `npm install express`
- Nodemon - `npm install -D nodemon`
  - The -D flag tells node to install the package as a dev dependency

3. Create an app.js file - Main hub of the application
   - Import express
   - Use express to instantiate app object
   - Listen to a port (start the server)

In app.js:

```js
const express = require("express");
const app = express();
```

- These 2 lines will appear in every express app. Everything that we do in our express backend will be done on our app object.

In order for our Express backend to run, we need our app to listen to a port, so we will use the `.listen` method on the app object to achieve this. The `.listen` method requires we pass in at least 1 argument, which is the port number, but we will usually pass in a 2nd argument, which will be a callback function.

In app.js at the bottom:

```js
app.listen(8000, () => console.log("Listening on port 8000..."));
```

Next we need to add our start scripts to package.json

```json
"start": "node app.js"
"dev": "nodemon app.js"
```

We can run the start command using npm start, but for dev, we have to use npm run dev. This is because commands like "start" and "test" are so common, that it will automatically add "run" to the command, but for custom scripts like "dev", we have to specify that it is a script.

Now we can create a simple endpoint in app.js

- note that it is okay if you don't understand the syntax for this yet. We will be covering that next.

```js
app.get("/test", (req, res) => {
  res.send("Hello from your first express API!");
});
```

## Route Handlers

App object methods:

- get
- post
- put/patch
- delete
- all
- use

Request path options:

- string
- array of strings
- regular expressions
- array of RegEx
- array of strings and RegEx

## Middleware:

Series of callback functions

- Will be talked about more on D2

## Response methods:

-send (used for plain text or JSON) - Will be almost exclusively used for sending plain text

- json (always sends JSON)
  - sets the headers and formatting for us

These are used for server-side html rendering, so we won't be using them.

- render
- redirect

```js
app.<method>(<path>, <middleware>, (req, res) => { response })
```

```js
app.post("/create", (req, res) => {
  console.log(req.body);
});
```

Note that the req.body is showing as undefined. In order to access the body of the request, we have to add some boilerplate middleware to the top of our app.js file

```js
app.use(express.json());
```

## !! Express works top => down !!

Important Request object properties

- req.body
  - Where the request body content can be found
  - Requires `app.use(express.json())` global middleware
- req.params - look at a website like IMDB
  - Dynamic piece of the path
  - Use a ":" in the path to signify a param
- req.query
  - Dynamic piece of the URL
  - Starts with a "?" in the URL

## Create a basic endpoint to look at request object:

```js
app.get("/request", (req, res) => {
  console.log(req);
});
```

## Create a basic endpoint to look at request params:

```js
app.get("/params", (req, res) => {
  console.log(req.params);
});
```

## Create a basic endpoint to look at request query:

```js
app.get("/query", (req, res) => {
  console.log(req.query);
});
```

## Important to note that routes should be in order of most specific => least specific
