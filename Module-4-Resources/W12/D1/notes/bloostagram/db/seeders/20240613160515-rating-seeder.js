"use strict";
const { Rating } = require("../models");
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
    await Rating.bulkCreate([
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 2,
      },
      {
        imageId: 1,
        rating: 4,
      },
      {
        imageId: 1,
        rating: 1,
      },
      {
        imageId: 1,
        rating: 5,
      },
      {
        imageId: 1,
        rating: 2,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 5,
      },
      {
        imageId: 1,
        rating: 4,
      },
      {
        imageId: 1,
        rating: 1,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 2,
      },
      {
        imageId: 1,
        rating: 5,
      },
      {
        imageId: 1,
        rating: 4,
      },
      {
        imageId: 1,
        rating: 2,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 4,
      },
      {
        imageId: 1,
        rating: 1,
      },
      {
        imageId: 1,
        rating: 5,
      },
      {
        imageId: 1,
        rating: 2,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 1,
      },
      {
        imageId: 1,
        rating: 4,
      },
      {
        imageId: 1,
        rating: 5,
      },
      {
        imageId: 1,
        rating: 5,
      },
      {
        imageId: 1,
        rating: 4,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 3,
      },
      {
        imageId: 1,
        rating: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Ratings", null, {});
  },
};
