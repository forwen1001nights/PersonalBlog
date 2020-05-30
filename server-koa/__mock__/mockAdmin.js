const Mock = require("mockjs");
const adminData = Mock.mock({
    'data': {
        username: 'yingbobin',
        password: '123123'
    }
}).data;
// console.log(adminData);
const Admin = require('../models/Admin');
// Admin.create(adminData)