"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        hooks: true,
      });

      User.hasMany(models.Comment, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        hooks: true,
      });

      User.hasMany(models.Like, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        hooks: true,
      });

      User.hasMany(models.Album, {
        foreignKey: "userId",
        onDelete: "CASCADE",
        hooks: true,
      });
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["createdAt", "updatedAt", "email", "password"],
        },
      },
      scopes: {
        onlyUserNameAndId: {
          attributes: ["id", "username"],
          order: [["username", "DESC"]],
        },
        includeUserPosts(userId) {
          const { Post } = require("../models");

          return {
            attributes: ["username", "id"],
            include: {
              model: Post,
              where: {
                userId: userId,
              },
              order: [["title", "ASC"]],
              attributes: ["caption", "title"],
            },
          };
        },
      },
    }
  );
  return User;
};
