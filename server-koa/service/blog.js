const Blog = require("../models/Blog");
const rule = require("../utils/validateRule");
const toFuzzy = require("../utils/toFuzzy");
const validate = require("validate.js");
module.exports= {
    async findAll(condition) {
        let result = null;
        const fCondition = toFuzzy(condition);
        if(fCondition) {
            result = await Blog.findAll({
                attributes: fCondition.need,
                where: fCondition.by,
                order: [
                    ['createdAt', 'DESC']
                ]
            });
        }else {
            result = await Blog.findAll();
        }
        return result;
    },
    async findByPage(condition) {
        let result = null;
        if(condition.page && condition.size) {
            result = await Blog.findAll({
                offset: (condition.page - 1) * condition.size,
                limit: condition.size,
                attributes: condition.need,
                where: condition.by
            });
        }
        return result;
    },
    async add(blog) {
        let result = null;
        //验证blog对象
        const error = validate(blog, rule.blogRules);
        console.log(error)
        //将blog添加进数据库
        if(!error) {
            console.log(2)
            result = await Blog.create(blog);
        }
        return result;
    },
    async update(condition, data) {
        let result = null;
        //验证对象
        const error = validate(data, rule.changeRule);
        if(error) {
            return result;
        }
        //更新blog
        if(condition && condition.by) {
            result = await Blog.update(data, {
                where: condition.by
            });
        }
        return result;
    },
    async deleteBlog(condition) {
        console.log(condition)
        let result = null;
        if(condition && condition.by) {
            result = await Blog.destroy({
                where: condition.by
            })
        }
        return result;
    }
}   