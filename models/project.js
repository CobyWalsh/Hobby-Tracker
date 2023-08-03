const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    record_uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true,
    },
    fk_user: {
      type: DataTypes.UUID,
      references: {
        model: 'Users',
        key: 'record_uuid',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.STRING,
    },
    date_start: {
      type: DataTypes.DATEONLY,
    },
    date_due: {
      type: DataTypes.DATEONLY,
    },
    date_completed: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: 'record_created',
    updatedAt: 'record_updated',
  },
);

module.exports = Project;
