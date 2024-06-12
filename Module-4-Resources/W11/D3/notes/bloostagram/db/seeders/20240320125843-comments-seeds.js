"use strict";

const { Comment } = require("../models");

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
    await Comment.bulkCreate(
      [
        { userId: 2, postId: 1, body: "This is great" },
        { userId: 1, postId: 5, body: "This is nice" },
        { userId: 3, postId: 10, body: "Cool pic!" },
        { userId: 1, postId: 5, body: "How is this possible?!" },
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
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
