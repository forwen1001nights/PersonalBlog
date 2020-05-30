const Router = require("koa2-router");
const { findAll, findByPage, add, update, deleteBlog } = require("../service/blog");
const changeRouter = new Router();
const router = new Router();

//changeRouter 用来执行对数据库的增删改查操作
router.use('/api/blog', changeRouter)

//blog查询操作
/**
 * condition: {
 *  size,
 *  page,
 *  by: {},
 *  need: []
 * }
 */
changeRouter.get('/findAll', async ctx => {
    const condition = JSON.parse(ctx.request.query.condition);
    const result = await findAll(condition);
    if(result) {
        ctx.body = {
            status: 200,
            data: result
        }
    }else {
        ctx.body = {
            status: 500,
            errMsg: '数据获取失败'
        }
    }
}),

changeRouter.get('/findByPage', async ctx => {
    const { condition } = ctx.request.body;
    const result = await findByPage(condition);
    if(result) {
        ctx.body = {
            status: 200,
            data: result
        }
    }else {
        ctx.body = {
            status: 500,
            errMsg: '数据获取失败'
        }
    }
})
//blog新增操作
changeRouter.post('/add', async ctx => {
    const { blog } = ctx.request.body;
    const result = await add(blog);
    if(result) {
        ctx.body = {
            status: 200,
            data: result
        }
    }else {
        ctx.body = {
            status: 500,
            errMsg: '添加数据失败'
        }
    }
})
//blog修改操作
changeRouter.put('/update', async ctx => {
    const { condition, data } = ctx.request.body;
    console.log('condition',condition);
    console.log('data', data);
    const result = await update(condition, data);
    if(result) {
        ctx.body = {
            status: 200,
            data: result
        }
    }else {
        ctx.body = {
            status: 500,
            errMsg: '修改数据失败'
        }
    }
});
//blog删除操作
changeRouter.delete('/delete', async ctx => {
    console.log(ctx.request.body)
    const { condition } = ctx.request.body;
    const result = await deleteBlog(condition);
    if(result) {
        ctx.body = {
            status: 200,
            data: result
        }
    }else {
        ctx.body = {
            status: 500,
            errMsg: '删除内容失败'
        }
    }
})
module.exports = router;