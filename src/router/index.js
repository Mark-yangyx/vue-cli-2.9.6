import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['@/pages/home/index'], resolve)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// 解决vue-router报错问题

Vue.use(Router)



const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router;
