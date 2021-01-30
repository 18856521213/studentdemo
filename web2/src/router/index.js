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
    },
    children:[
      {
        path: 'student',
        name: 'student',
        component: ()=> import("@/views/studentManage/studentNames.vue"),
        meta:{
          name:"学生名单"
        }
      },
      {
        path: 'studentScore',
        name: 'studentScore',
        component: Login,
        meta:{
          name:"学生名单"
        }
      },
    ]
  },
]

const router = new VueRouter({
  routes,
  // 路由改变时滚动到顶部，而返回上一级时滚动到之前位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 禁止相同路由跳转时打印错误信息
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
