// 后台的路由
const router = require('koa-router')();

const login = require('./admin/login');
const user = require('./admin/user');
const category = require('./admin/category');
const url=require('url');

router.prefix('/admin');

//配置中间件 获取url的地址


router.use(async (ctx, next) => {
  //console.log(ctx.request.header.host);

  //模板引擎配置全局的变量
  ctx.state.__HOST__ = 'http://' + ctx.request.header.host;
  ctx.state.__ROOT__ = 'http://' + ctx.header.host;
  //  /admin/login/code?t=709.0399997523431
  let pathname = url.parse(ctx.request.url).pathname;
  await next();
  //权限判断
/*   if (ctx.session.userinfo) {
    await  next();
  } else {  //没有登录跳转到登录页面
    if (pathname == '/admin/login' || pathname == '/admin/login/doLogin' || pathname == '/admin/login/code') {
      await  next();
    } else {
      ctx.redirect('/admin/login');
    }
  } */


});

router.get('/', async (ctx, next) => {
  await ctx.render('admin/index', {
    title: 'Hello Koa 2!'
  })
});

router.use(login.routes(), login.allowedMethods());
router.use(user.routes(), user.allowedMethods());
router.use(category.routes(), category.allowedMethods());

module.exports = router;
