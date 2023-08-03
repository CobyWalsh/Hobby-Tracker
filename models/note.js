const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
        model: 'Project',
        key: 'record_uuid',
      },
    },
    fk_material: {
      type: DataTypes.UUID,
      references: {
        model: 'Material',
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
