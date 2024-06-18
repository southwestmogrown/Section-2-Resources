"use strict";

const { Album } = require("../models");

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
    await Album.bulkCreate(
      [
        { userId: 1, name: "album 1" },
        { userId: 1, name: "album 2" },
        { userId: 2, name: "album 3" },
        { userId: 2, name: "album 4" },
        { userId: 3, name: "album 5" },
        { userId: 3, name: "album 6" },
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
    await queryInterface.bulkDelete("Albums", null, {});
  },
};
