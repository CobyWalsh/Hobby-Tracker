const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model { };

HobbyTracker.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    record_created: {
      type: DataTypes.TIMESTAMP,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    record_updated: {
      type: DataTypes.TIMESTAMP,
      defaultValue: DataTypes.NOW,
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
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'notes',
  }
);

module.exports = HobbyTracker;