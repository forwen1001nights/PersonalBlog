const Router = require("koa2-router");
const Admin = require("../models/Admin");
const { login } = require("../service/admin")
const router = new Router();

//changeRouter 用来执行对数据库的增删改查操作
const changeRouter = new Router();
router.use('/api/admin', changeRouter)


// admin表查询操作
changeRouter.get('/', async ctx => {
    console.log(ctx.path);
    ctx.body = 'hello world';
})

// admin表新增操作
changeRouter.post('/', async ctx => {
    console.log(ctx.request.body);
    const adminData = ctx.request.body;
    const result = await Admin.create(adminData);
    return result.toJSON();
})

//admin登陆操作
changeRouter.post('/login', async ctx => {
    const loginInfo = ctx.request.body;
    const result = await login(loginInfo);
    if(result) {
        ctx.body = {
            status: 'success',
            msg: '登陆成功'
        }
    }else {
        ctx.body = {
            status: 'faild',
            msg: '登陆失败'
        }
    }
})

// admin表修改操作
changeRouter.put('/', async ctx => {
    const { username, id } = ctx.request.query;
    const adminData = ctx.request.body;
    const result = await Admin.update(adminData, {
        where: {
            username,
            id
        }
    });
    return result;
})

// admin表删除操作
changeRouter.delete('/', async ctx => {
    const { username, id } = ctx.request.query;
    const result = await Admin.destroy({
        where: {
            username,
            id
        }
    });
    return result;
})

module.exports = router;