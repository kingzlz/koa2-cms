const router = require('koa-router')();

router.prefix('/category');
router.get('/', async (ctx) => {

  //ctx.body="用户管理";

  await ctx.render('admin/category/index');

});


router.get('/add', async (ctx) => {

  await ctx.render('admin/category/add');

});

router.get('/edit', async (ctx) => {
  await ctx.render('admin/category/edit');
  ctx.body = '编辑分类';

})

router.get('/delete', async (ctx) => {
  await ctx.render('admin/category/delete');
  ctx.body = '删除分类';

})

module.exports = router;