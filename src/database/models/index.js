const Sequelize = require('sequelize');
const dbConfig = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

const db = {};
const sequelize = new Sequelize(config.url, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;