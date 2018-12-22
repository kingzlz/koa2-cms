// 前台的路由
const router = require('koa-router')();

// router.prefix('/index');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});


module.exports = router;
