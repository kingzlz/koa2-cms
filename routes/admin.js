// 后台的路由
const router = require('koa-router')();

const login = require('./admin/login');
const user = require('./admin/user');

router.prefix('/admin');

//配置中间件 获取url的地址


router.use(async (ctx, next) => {
  //console.log(ctx.request.header.host);

  //模板引擎配置全局的变量
  ctx.state.__HOST__ = 'http://' + ctx.request.header.host;

  await  next();

});

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});

router.use(login.routes(), login.allowedMethods());
router.use(user.routes(), user.allowedMethods());

module.exports = router;
