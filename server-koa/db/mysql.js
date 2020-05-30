const { Sequelize } = require('sequelize');
const { database } = require('../config/server')
const sequelize = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    dialect: database.dialect
});

module.exports = sequelize;