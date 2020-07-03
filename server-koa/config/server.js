const ip = require("ip");
const { env } = process;
// const totalConfig = require("../../config/blog");
module.exports = {
    //服务端host，默认为本机ip(可能会是局域网ip)
    host: env.Host || ip.address(),

    // service port
    port: env.Port || 3000,
    
    //mysqldb 
    database: {
        host: 'localhost',
        name: 'PersonalBlog',
        username: 'root', // your database username
        password: 'xxxxxx', // your database password
        dialect: 'mysql'
    },
}