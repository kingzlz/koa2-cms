const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const render = require('koa-art-template');
const router = require('koa-router')();
const static = require('koa-static');
const session = require('koa-session');



// 实例化
let app = new Koa();
//配置post提交数据的中间件
app.use(bodyParser());
// 配置session的中间件

app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',
  maxAge: 864000,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: true,   /*每次请求都重新设置session*/
  renew: false,
};
app.use(session(CONFIG, app));

// 配置模板引擎
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

//配置 静态资源的中间件
app.use(static(__dirname + '/public'));

//引入模块

const admin = require('./routes/admin');
const api = require('./routes/api');
const index = require('./routes/index');


router.use(index.routes(), index.allowedMethods());
router.use(api.routes(), api.allowedMethods());
router.use(admin.routes(), admin.allowedMethods());

app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());

app.listen(3000);