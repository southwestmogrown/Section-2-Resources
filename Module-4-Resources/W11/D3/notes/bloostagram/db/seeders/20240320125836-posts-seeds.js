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
          caption: "This is a caption!",
          title: "New Post",
        },
        {
          caption: "Another fanciful caption!",
          title: "Great Title",
        },
        {
          caption: "Another wonderful caption!",
          title: "Sweet Title",
        },
        {
          caption: "Another spectacular caption!",
          title: "Sweet Title",
        },
        {
          caption: "Another bodacious caption!",
          title: "Ok Title",
        },
        {
          caption: "Another cool caption!",
          title: "Whatever",
        },
        {
          caption: "Just some text",
          title: "Words",
        },
        {
          caption: "Another tubular caption",
          title: "It's a title, y'all",
        },
        {
          caption: "Another radical caption",
          title: "Some title",
        },
        {
          caption: "Another astounding caption",
          title: "Yet another title",
        },
        {
          caption: "Another stellar caption",
          title: "Testing",
        },
        {
          caption: "Another great caption",
          title: "Greetings",
        },
        {
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
