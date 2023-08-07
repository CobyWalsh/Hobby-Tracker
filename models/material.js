const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Material extends Model {}

Material.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    purchased_amt: {
      type: DataTypes.FLOAT,
    },
    purchased_date: {
      type: DataTypes.DATEONLY,
    },
    purchased_place: {
      type: DataTypes.STRING,
    },
    purchased_price: {
      type: DataTypes.FLOAT,
    },
  },
  {
    sequelize,
    timestamps: true,
    createdAt: 'record_created',
    updatedAt: 'record_updated',
  },
);

module.exports = Material;
