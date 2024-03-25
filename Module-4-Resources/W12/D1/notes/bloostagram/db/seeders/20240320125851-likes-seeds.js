"use strict";

const { Like } = require("../models");

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
    await Like.bulkCreate(
      [
        { userId: 1, postId: 6 },
        { userId: 1, postId: 1 },
        { userId: 1, postId: 3 },
        { userId: 2, postId: 12 },
        { userId: 2, postId: 5 },
        { userId: 2, postId: 1 },
        { userId: 3, postId: 1 },
        { userId: 3, postId: 13 },
        { userId: 3, postId: 7 },
      ],
      { valdate: true }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Likes", null, {});
  },
};
