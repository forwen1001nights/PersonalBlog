const Admin = require("../models/Admin");
module.exports = {
    async login(data) {
        const result = await Admin.findOne({
            where: {
                username: data.username
            }
        })
        if(result.password === data.password) {
            return {
                id: result.id,
                username: result.username
            }
        }
        return null;
    },
    async search(condition) {
        let result = null;
        if(condition) {
            result = await Blog.findAll({
                attributes: condition.need,
                where: condition.by,
            });
        }else {
            result = await Admin.findAll();
        }
    }
}