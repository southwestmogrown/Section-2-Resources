"use strict";

const { AlbumImage } = require("../models");

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
    await AlbumImage.bulkCreate(
      [
        { albumId: 1, imageId: 1 },
        { albumId: 1, imageId: 2 },
        { albumId: 1, imageId: 3 },
        { albumId: 2, imageId: 4 },
        { albumId: 2, imageId: 5 },
        { albumId: 2, imageId: 6 },
        { albumId: 3, imageId: 7 },
        { albumId: 3, imageId: 8 },
        { albumId: 3, imageId: 9 },
        { albumId: 4, imageId: 10 },
        { albumId: 4, imageId: 11 },
        { albumId: 4, imageId: 12 },
        { albumId: 5, imageId: 13 },
        { albumId: 5, imageId: 3 },
        { albumId: 5, imageId: 5 },
        { albumId: 6, imageId: 7 },
        { albumId: 6, imageId: 3 },
        { albumId: 6, imageId: 6 },
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
    await queryInterface.bulkDelete("AlbumImages", null, {});
  },
};
