const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { HobbyTracker } = require('.');

class HobbyTracker extends Model {}

HobbyTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    record_created: {
        type: DataTypes.DATETIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    record_updated: {
      type: DataTypes.DATETIME,
    needed_funding: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fk_project: {
      type: DataTypes.CHAR(36),
      },
      fk_material: {
        type: DataTypes.CHAR(36),
        },
        text: {
            type: DataTypes.TEXT,
            },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'notes',
  }
);

module.exports = HobbyTracker;