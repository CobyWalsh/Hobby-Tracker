const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Image extends Model {}

Image.init(
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
    fk_project: {
      // Sequelize's DataTypes.UUID becomes CHAR(36) in MySQL
      type: DataTypes.UUID,
      references: {
        model: 'Projects',
        key: 'record_uuid',
      },
    },
    fk_material: {
      // Sequelize's DataTypes.UUID becomes CHAR(36) in MySQL
      type: DataTypes.UUID,
      references: {
        model: 'Materials',
        key: 'record_uuid',
      },
    },
    name: {
      // Sequelize's DataTypes.STRING becomes VARCHAR(255) in MySQL
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      // Sequelize's DataTypes.STRING becomes VARCHAR(255) in MySQL
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
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

module.exports = Image;
