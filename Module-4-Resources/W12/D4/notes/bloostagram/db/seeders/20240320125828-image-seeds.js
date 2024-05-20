"use strict";

const { Image } = require("../models");

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

    await Image.bulkCreate(
      [
        { imageUrl: "www.image-url.com/images/1" },
        { imageUrl: "www.image-url.com/images/2" },
        { imageUrl: "www.image-url.com/images/3" },
        { imageUrl: "www.image-url.com/images/4" },
        { imageUrl: "www.image-url.com/images/5" },
        { imageUrl: "www.image-url.com/images/6" },
        { imageUrl: "www.image-url.com/images/7" },
        { imageUrl: "www.image-url.com/images/8" },
        { imageUrl: "www.image-url.com/images/9" },
        { imageUrl: "www.image-url.com/images/10" },
        { imageUrl: "www.image-url.com/images/11" },
        { imageUrl: "www.image-url.com/images/12" },
        { imageUrl: "www.image-url.com/images/13" },
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
    await queryInterface.bulkDelete("Images", null, {});
  },
};
