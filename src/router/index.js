import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import home from '../components/home.vue'
import welcome from '../components/welcome.vue'
import users from '../components/users/users.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: home,
    children: [{
      path: '/welcome',
      component: welcome
    }, {
      path: '/home',
      redirect: '/welcome'
    },{
      path: '/users',
      component: users
    }]
  }
]


const router = new VueRouter({
  routes
})

export default router