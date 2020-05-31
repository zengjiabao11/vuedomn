import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

  const routes = [
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:home}
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(to.path ==='/login') return next()
  const tokenstr = window.sessionStorage.getItem('token')
  if(!tokenstr) return next('/login')
  next()
})
export default router
