"use strict";

const { Post } = require("../models");

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
    await Post.bulkCreate(
      [
        {
          userId: 1,
          imageId: 1,
          caption: "This is a caption!",
          title: "New Post",
        },
        {
          userId: 2,
          imageId: 2,
          caption: "Another fanciful caption!",
          title: "Great Title",
        },
        {
          userId: 1,
          imageId: 3,
          caption: "Another wonderful caption!",
          title: "Sweet Title",
        },
        {
          userId: 2,
          imageId: 4,
          caption: "Another spectacular caption!",
          title: "Sweet Title",
        },
        {
          userId: 3,
          imageId: 5,
          caption: "Another bodacious caption!",
          title: "Ok Title",
        },
        {
          userId: 1,
          imageId: 6,
          caption: "Another cool caption!",
          title: "Whatever",
        },
        {
          userId: 2,
          imageId: 7,
          caption: "Just some text",
          title: "Words",
        },
        {
          userId: 1,
          imageId: 8,
          caption: "Another tubular caption",
          title: "It's a title, y'all",
        },
        {
          userId: 2,
          imageId: 9,
          caption: "Another radical caption",
          title: "Some title",
        },
        {
          userId: 3,
          imageId: 10,
          caption: "Another astounding caption",
          title: "Yet another title",
        },
        {
          userId: 1,
          imageId: 11,
          caption: "Another stellar caption",
          title: "Testing",
        },
        {
          userId: 2,
          imageId: 12,
          caption: "Another great caption",
          title: "Greetings",
        },
        {
          userId: 3,
          imageId: 13,
          caption: "Another bountiful caption",
          title: "Hello World",
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
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
