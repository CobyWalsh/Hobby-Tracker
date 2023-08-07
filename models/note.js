const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
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
    fk_project: {
      type: DataTypes.UUID,
      references: {
        model: 'Projects',
        key: 'record_uuid',
      },
    },
    fk_material: {
      type: DataTypes.UUID,
      references: {
        model: 'Materials',
        key: 'record_uuid',
      },
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: 'record_created',
    updatedAt: 'record_updated',
  },
);

module.exports = Note;
