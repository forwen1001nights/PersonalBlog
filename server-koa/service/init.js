const validate = require("validate.js");
const moment = require("moment");
// 初始化validate的date验证
validate.extend(validate.validators.datetime, {
     /**
     * @description: 
     * @param {type} value 传入要转换的值
     * @param {type} options 针对某个属性的验证配置
     * @return: 
     */   
    parse(value, options) {
        const formats = ['YYYY-MM-DD', 'YYYY-M-D'];
        return + moment.utc(value, formats, true);
    },
    /* 
    * 用户显示错误消息时，使用的显示字符串
    */
    format(value, options) {
        const format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
    }
})