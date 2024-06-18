"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.hasOne(models.Post, { foreignKey: "imageId" });

      Image.belongsToMany(models.Album, {
        through: models.AlbumImage,
        foreignKey: "imageId",
        otherKey: "albumId",
      });

      Image.hasMany(models.Rating, {
        foreignKey: "imageId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  Image.init(
    {
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
