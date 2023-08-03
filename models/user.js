const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      // Use an unsigned, auto-incremented integer as the primary key
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    record_uuid: {
      // Sequelize's DataTypes.UUID becomes CHAR(36) in MySQL
      type: DataTypes.UUID,
      // Generate a UUID upon record creation
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
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
      validate: {
        isEmail: true,
      },
    },
    password: {
      // Sequelize's DataTypes.STRING becomes VARCHAR(255) in MySQL
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10],
      },
    },
  },
  {
    // TODO: #68 Implement bcrypt in hooks with beforeCreate and beforeUpdate functions
    // Pass the connection instance
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
