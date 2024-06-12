// Instantiate Express and the application - DO NOT MODIFY
const express = require("express");
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require("express-async-errors");
require("dotenv").config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require("./db/models");

// Index of all puppies - DO NOT MODIFY
app.get("/puppies", async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [["name", "ASC"]] });

  res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put("/puppies/:puppyId", async (req, res, next) => {
  // Your code here
  const { ageYrs, weightLbs, microchipped } = req.body;

  const puppyToUpdate = await Puppy.findByPk(req.params.puppyId);

  // Only assign values if they are defined on the request body
  // Explicit `undefined` check is important when dealing with booleans
  if (ageYrs !== undefined) puppyToUpdate.ageYrs = ageYrs;
  if (weightLbs !== undefined) puppyToUpdate.weightLbs = weightLbs;
  if (microchipped !== undefined) puppyToUpdate.microchipped = microchipped;

  await puppyToUpdate.save();

  res.json({
    message: `Successfully updated puppy with id ${req.params.puppyId}`,
    puppy: puppyToUpdate,
  });
});

// STEP 2: Delete a puppy by id
app.delete("/puppies/:puppyId", async (req, res, next) => {
  // Your code here
  const puppyToDelete = await Puppy.findByPk(req.params.puppyId);
  await puppyToDelete.destroy();

  res.json({
    message: `Puppy with id ${req.params.puppyId} successfully deleted.`,
    puppy: puppyToDelete,
  });
});

// Root route - DO NOT MODIFY
app.get("/", (req, res) => {
  res.json({
    message: "API server is running",
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log("Server is listening on port", port));
} else {
  module.exports = app;
}
