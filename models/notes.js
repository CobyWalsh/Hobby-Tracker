const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model { };

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    uuid: {
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
    fk_project: {
      type: DataTypes.CHAR(36),
      references: {
        model: 'Project',
        key: 'uuid', 
      },
    },
    fk_material: {
      type: DataTypes.CHAR(36),
      references: {
        model: 'Material',
        key: 'uuid', 
      },
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
  }
);

module.exports = Note;
