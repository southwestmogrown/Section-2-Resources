"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AlbumImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AlbumImage.init(
    {
      albumId: DataTypes.INTEGER,
      image_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "AlbumImage",
    }
  );
  return AlbumImage;
};
