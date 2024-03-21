<style>
    .present {
        text-align: left;
    }
</style>

---

###### tags: `Week 11` `W11D4`

---

\*\* Share the Sequelize Reference Sheet on Slack at the beginning of class

---

# Week 11 Day 4

Built in association methods and aggregate queries

---

## Association Methods

\*\* Create a route in the app/router to demo association methods

Once we have an instance provided by a query in Sequelize, we are provided with a series of built in methods that allow us to easily make additional queries.

---

# Getter method

After querying a table, we automatically get a method to get a related table's info

For example:

```javascript
let user = await User.findByPk(1);
let posts = await user.getPosts();
```

The getter method can be either plural or singular based on the relationship
Basically exists to assist in lazy loading

---

# Create Method

After querying a table, we can create a record for a related table
We don't need to add the value for the FK
For example:

```javascript
let user = await User.findByPk(1);
let post = await user.createPost({
  title: "New Post",
  caption: "Good Times",
  imageId: 15,
});
```

---

# Add Method

In a Many to Many relationship, allows us to add a record to the joins table
For example:

```javascript
let album = await Album.findByPk(1);
await album.addImage(someImage);
```

---

# 20 min for Insert with Associations SP

---

# Aggregate Functions

Our recommendation is to stick to basic, class-level aggregate functions and JS
We want to LAZY LOAD OUR AGGREGATE DATA

---

\*\* Create a new route to demo aggregates

- Min/Max
  - `await <model>.<func>(<col>)`
- Count
  - `await <model>.count()`
  - Can also be achieved by finding the length of the return from `<model>.findAll()`
- Sum
  - `await <model>.sum(<col>)`

---

Avg can be calculated by writing simple JS combining the count and sum methods

We can also take in an obj to specify a WHERE clause to target specific records

- `await <model>.<func>(<col>, { where: <filter> })`

---

We can use the `<instance>.toJSON()` method to turn the result from a query into a JSON object instead of a promise

This allows us to lazy load our aggregate data then add it to the return from a data query

This is useful for the project!!

---

# 30 min for Aggregate Data SP

---

# Break out to work on PA

- this will go through today and tomorrow since it is so long

---
