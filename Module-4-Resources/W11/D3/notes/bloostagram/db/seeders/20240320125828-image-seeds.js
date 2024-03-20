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
        { name: "www.image-url.com/images/1" },
        { name: "www.image-url.com/images/2" },
        { name: "www.image-url.com/images/3" },
        { name: "www.image-url.com/images/4" },
        { name: "www.image-url.com/images/5" },
        { name: "www.image-url.com/images/6" },
        { name: "www.image-url.com/images/7" },
        { name: "www.image-url.com/images/8" },
        { name: "www.image-url.com/images/9" },
        { name: "www.image-url.com/images/10" },
        { name: "www.image-url.com/images/11" },
        { name: "www.image-url.com/images/12" },
        { name: "www.image-url.com/images/13" },
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
