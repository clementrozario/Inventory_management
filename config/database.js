// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('project', 'root', 'clement', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
