// models/Item.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Set up your Sequelize instance

const Item = sequelize.define('Item', {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Item;
