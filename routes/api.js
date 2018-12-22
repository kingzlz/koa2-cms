// api的路由
const router = require('koa-router')();

router.prefix('/api');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
});


module.exports = router;
