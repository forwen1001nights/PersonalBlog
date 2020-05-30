const ip = require("ip");
const { env } = process;

module.exports = {
    //服务端host，默认为本机ip(可能会是局域网ip)
    host: env.Host || ip.address(),

    // service port
    port: env.Port || 3000,
    
    //mysqldb 
    database: {
        host: 'localhost',
        name: 'PersonalBlog',
        username: 'root',
        password: 'cjw1017',
        dialect: 'mysql'
    },

    // parentTag: ['front-end', 'after-end', 'life', 'others', 'sketch']
    paretTag: [
        {
            name: '前端',
            tagName: 'front-end'
        },
        {
            name: '后端',
            tagName: 'after-end'
        }, 
        {
            name: '乐活',
            tagName: 'life'
        }, 
        {
            name: '杂项',
            tagName: 'others'
        }, 
        {
            name: '随笔',
            tagName: 'sketch'
        }
    ]
}