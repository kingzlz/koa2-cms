const router = require('koa-router')();

router.prefix('/user');
router.get('/', async (ctx) => {

  //ctx.body="用户管理";

  await  ctx.render('admin/user/list');

});


router.get('/add', async (ctx) => {

  await  ctx.render('admin/user/add');

});

router.get('/edit', async (ctx) => {

  ctx.body = '编辑用户';

})

router.get('/delete', async (ctx) => {

  ctx.body = '删除用户';

})

module.exports = router;