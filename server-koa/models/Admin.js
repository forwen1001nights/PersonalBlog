const { DataTypes } = require("sequelize");
const sequelize = require("../db/mysql");

const Admin = sequelize.define('Admin', {
    //定义管理员模型属性
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Admin;