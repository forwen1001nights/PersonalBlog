//同步所有模型
require("./Admin");
require("./Blog");
require("./ParentTag")
const sequelize = require("../db/mysql");

module.exports = async function syncAll() {
    await sequelize.sync();
    console.log('所有模型均已同步成功');
}