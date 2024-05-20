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
          username: "bloo",
          firstName: "Blooregard Q.",
          lastName: "Kazoo",
          email: "bloo@kazoo.com",
          password: "supersecretpassword",
        },
        {
          username: "pep-pep",
          firstName: "Pepper",
          lastName: "Ann",
          email: "pep@pep.com",
          password: "supersecretpassword",
        },
        {
          username: "daisy-doge",
          firstName: "Daisy",
          lastName: "Mae",
          email: "daisy@doge.com",
          password: "supersecretpassword",
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
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
