const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    record_uuid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      unique: true,
    },
    record_created: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    record_updated: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    name: {
      type: DataTypes.VARCHAR(250),
      allowNull: false,
    },
    email: {
      type: DataTypes.VARCHAR(250),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.VARCHAR(250),
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

module.exports = User;
