const express = require("express");
const app = express();

console.log(process.env.MESSAGE);

const peopleRouter = require("./routes/people");
const colorsRouter = require("./routes/colors");
const testApp = require("./routes/app");

app.use("/people", peopleRouter);
app.use("/colors", colorsRouter);
app.use("/tests", testApp);

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
