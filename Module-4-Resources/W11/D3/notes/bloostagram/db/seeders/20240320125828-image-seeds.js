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
        { image_url: "www.image-url.com/images/1" },
        { image_url: "www.image-url.com/images/2" },
        { image_url: "www.image-url.com/images/3" },
        { image_url: "www.image-url.com/images/4" },
        { image_url: "www.image-url.com/images/5" },
        { image_url: "www.image-url.com/images/6" },
        { image_url: "www.image-url.com/images/7" },
        { image_url: "www.image-url.com/images/8" },
        { image_url: "www.image-url.com/images/9" },
        { image_url: "www.image-url.com/images/10" },
        { image_url: "www.image-url.com/images/11" },
        { image_url: "www.image-url.com/images/12" },
        { image_url: "www.image-url.com/images/13" },
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
