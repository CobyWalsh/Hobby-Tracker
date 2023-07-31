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
      // Sequelize's DataTypes.UUID becomes CHAR(36) in MySQL
      type: DataTypes.UUID,
      allowNull: false,
      // Allow Sequelize will generate a UUID upon record creation
      defaultValue: DataTypes.UUIDV4,
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
