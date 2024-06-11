"use strict";
const { Color } = require("../models");
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
    await Color.bulkCreate(
      [
        {
          name: "purple",
          createdAt: new Date("02/25/1982"),
          updatedAAt: new Date("02/25/1982"),
        },
        {
          name: "magenta",
        },
        {
          name: "perriwinkle blue",
          createdAt: new Date("07/04/1979"),
          updatedAAt: new Date("02/25/1982"),
        },
        {
          name: "indigo",
        },
        {
          name: "cyan",
        },
        {
          name: "chartreuse",
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
    await queryInterface.bulkDelete(
      "Colors",
      [
        {
          name: [
            "cyan",
            "chartreuse",
            "indigo",
            "purple",
            "magenta",
            "perriwinkle blue",
          ],
        },
      ],
      {}
    );
  },
};
