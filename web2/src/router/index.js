import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    redirect:'/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      name:"登录页"
    }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      name:"首页"
    }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
