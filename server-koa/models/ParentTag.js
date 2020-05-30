const { DataTypes } = require("sequelize");
const sequelize = require("../db/mysql");

const ParentTag = sequelize.define('ParentTag', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tagName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = ParentTag;