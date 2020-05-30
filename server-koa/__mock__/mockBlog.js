const Mock = require("mockjs");
const blogData = Mock.mock({
    'datas|3-10': [{
        'title|5-10': '*',
        'content|100-300': '*',
        parentTag: 'front-end',
        tag: 'node',
        ctime: '@date()'
    }]
}).datas;
console.log(typeof blogData[0].ctime);

// const Blog = require("../models/Blog");
// Blog.bulkCreate(blogData);
