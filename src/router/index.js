import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login/login'
import { hasToken } from '../utils/login'

import Layout from "@/layout/index"

Vue.use(Router)

const router = new Router({
  scrollBehavior:() => ({y:0}),
  routes: [
    {
      path: '',
      component:Layout,
      children:[
        {

          path:'/home',
          component: (resolve) => require(['@/components/HelloWorld'],resolve)
   
        }
      ]
      },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path:'/404',
      component:(resolve) => require(['@/view/error/404'],resolve)
    },{
      path:'*',
      redirect:'/404'
    }
  ]
})

router.beforeEach((to,from,next) => {
 console.log("///",hasToken())
  if(hasToken()){
    if(to.path === '/login'){
      next({path:'/'})
    }else{
      // 根据用户信息获取响应的数据
      // 获取用户信息
      next()
      // 更加用户确定数据
    }
  }else{
    console.log('>',hasToken())
    if(to.path==='/login'){
      next()
    }else{
      next(`/login?redirect=${to.fullPath}`)
    }
    
  }
 
  console.log(to)
  console.log(from)
  console.log(next())
})
export default router