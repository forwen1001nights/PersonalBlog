const syncAll = require('./models/sync');
require('./service/init');
const koa = require("koa2");
const serverConfig = require("./config/server");
const { historyApiFallback }= require('koa2-connect-history-api-fallback');
const app = new koa();
app.proxy = true;
syncAll();
// middlewares
const bodyParser = require('koa-bodyparser');
const cors = require('./middlewares/cors');
const static = require("koa-static");


// routers
const adminRouter = require("./routes/admin");
const blogRouter = require("./routes/blog");

// app.use( async (ctx, next) => {
//     console.log(ctx.url);
//     await next();
// })

app.use(historyApiFallback({
    htmlAcceptHeaders: ['text/html', '*/*']
}));
app.use(static(__dirname + '/public'));
app.use(cors);
app.use(bodyParser());

app.use(adminRouter);
app.use(blogRouter);

app.listen(serverConfig.port);

module.exports = app;