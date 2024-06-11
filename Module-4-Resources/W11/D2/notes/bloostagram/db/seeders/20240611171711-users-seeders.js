"use strict";
const { User } = require("../models");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await User.bulkCreate(
      [
        {
          username: "Shane",
          password: "password1",
          bio: "Really long bio",
          profilePic: "someurl.com",
        },
        {
          username: "Briana",
          password: "password1",
          bio: "Really long bio",
          profilePic: "someurl.com",
        },
        {
          username: "Brad",
          password: "password1",
          bio: "Really long bio",
          profilePic: "someurl.com",
        },
        {
          username: "Brandon",
          password: "password1",
          bio: "Really long bio",
          profilePic: "someurl.com",
        },
      ],
      { validate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
