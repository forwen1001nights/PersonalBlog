const { DataTypes } = require("sequelize");
const sequelize = require("../db/mysql");

const Blog = sequelize.define('Blog', {
    //定义博客模型属性
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customaryContent: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    parentTag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tag: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ctime: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = Blog;