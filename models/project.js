const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
        model: 'User',
        key: 'record_uuid',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date_start: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      date_due: {
        type: DataTypes.DATE,
      },
      date_completed: {
        type: DataTypes.DATE,
      },
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
