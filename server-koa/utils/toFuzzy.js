const { Op } = require("sequelize")

//模糊查询

module.exports = function toFuzzy(condition) {
    let newCondition = {
        ...condition
    }
    if(!newCondition.by) {
        return newCondition;
    }
    if(newCondition.by instanceof Object) {
        for (const type in newCondition.by) {
            const { by } = newCondition;
            if (by.hasOwnProperty(type)) {
                let temp = by[type];
                if(temp.value && temp.isFuzzy === true) {
                    temp = {
                        [Op.substring]: temp.value
                    }
                    newCondition.by[type] = temp;
                }
            }
        }
    }
    return newCondition;
}