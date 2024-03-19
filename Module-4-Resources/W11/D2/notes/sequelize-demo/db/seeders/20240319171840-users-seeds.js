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
    // await queryInterface.bulkInsert(
    //   "Users",
    //   [
    //     {
    //       firstName: "John",
    //       lastName: "Doe",
    //       email: "john@doe.com",
    //       password: "johnspassword",
    //     },
    //   ],
    //   {}
    // );

    await User.bulkCreate(
      [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@doe.com",
          password: "johnspassword",
        },
        {
          firstName: "jane",
          lastName: "Doe",
          email: "john@doe.com",
          password: "johnspassword",
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
