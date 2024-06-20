"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsToMany(models.Image, {
        through: models.AlbumImage,
        foreignKey: "albumId",
        otherKey: "imageId",
      });

      Album.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Album.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Album",
    }
  );
  return Album;
};
