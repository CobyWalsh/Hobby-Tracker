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
    name: {
      // Sequelize's DataTypes.STRING becomes VARCHAR(255) in MySQL
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      // Sequelize's DataTypes.STRING becomes VARCHAR(255) in MySQL
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      // Sequelize's DataTypes.STRING becomes VARCHAR(255) in MySQL
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    // Enable Sequelize built-in timestamps
    timestamps: true,
    // Use a custom name instead of createdOn
    createdAt: 'record_created',
    // Use a custom name instead of updatedOn
    updatedAt: 'record_updated',
  },
);

module.exports = User;
