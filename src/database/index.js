const buildCampusDB = require('./campus-db');

const Sequelize = require('sequelize');

const createDB = async () => new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/crud-server`,
    { logging: false }
);

const campusDB = buildCampusDB({ createDB });

module.exports =
{
    campusDB,
    createDB
};