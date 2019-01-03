// 前台的路由
const router = require('koa-router')();


router.prefix('/index');

router.get('/', async (ctx, next) => {

  // get database

  await ctx.render('index/index', {
    title: '部门列表',
    departmentList: [{ id: 1, departmentName: '财务' }, { id: 2, departmentName: '行政' }, { id: 3, departmentName: '研发' }]
  })
});

// add
router.post('/add', (ctx, next) => {
  console.log('add', ctx.request.body);
  ctx.redirect('/index');
});

// delete
router.del('/department/:id', (ctx, next) => {
  // ...
});

// update

router.put('/department/:id', (ctx, next) => {
  // ...
});


module.exports = router;
