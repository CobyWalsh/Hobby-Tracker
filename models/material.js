const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Material extends Model {}

Material.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    record_created: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    record_updated: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fk_project: {
        type: DataTypes.TEXT
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
        allowNull: false,
        },
    purchased_date: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
            },
    purchased_place: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    purchased_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
        
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'material',
  }
);

module.exports = Material;
