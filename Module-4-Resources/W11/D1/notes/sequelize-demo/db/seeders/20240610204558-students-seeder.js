"use strict";

const { Student } = require("../models");

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
    await Student.bulkCreate([
      {
        firstName: "Scott",
        lastName: "Feichter",
      },
      {
        firstName: "Stephen",
        lastName: "Young",
      },
      {
        firstName: "Daniel",
        lastName: "Ho",
      },
      {
        firstName: "Alberto",
        lastName: "Dent",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Students", null, {});
  },
};
