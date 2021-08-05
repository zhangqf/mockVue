import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login/login'
import { hasToken } from '../utils/login'

import Layout from "@/layout/index"

Vue.use(Router)

const router = new Router({
  scrollBehavior:() => ({y:0}),
  mode:'history',
  routes: [
    {
      path: '/',
      component:Layout,
      redirect:"/index",
      
      // meta:{title:"首12页"},
      children:[
        {
          // meta:{title:'dash'},
          path:'/index',
          name:"index",
          component: (resolve) => require(['@/components/HelloWorld'],resolve)
   
        },
        {
          meta:{title:'dash'},
          path:'/dash',
          name:"dash",
          component: (resolve) => require(['@/components/HelloWorld'],resolve)
   
        },
        {
          meta:{title:'首页1'},
          path:'/nav',
          name:"nav",
          component: (resolve) => require(['@/components/HelloWorld1'],resolve)
   
        },
        {
          meta:{title:'group'},
          path:'/page',
          name:"page",
          redirect:'/page/a',
          component: (resolve) => require(['@/components/HelloWorld1'],resolve),
          children:[{
            path:"a",
            meta:{title:'a'},
            name:"a",
            component: (resolve) => require(['@/components/HelloWorld1'],resolve),
          },{
            path:'b',
            meta:{title:'b'},
            name:"b",
            component: (resolve) => require(['@/components/HelloWorld1'],resolve)

          }
        ]
   
        },
        {
          meta:{title:'首页3'},
          path:'/home3',
          name:"home3",
          component: (resolve) => require(['@/components/HelloWorld1'],resolve)
   
        },
        {
          meta:{title:'test'},
          path:'/home3/test',
          name:"test",
          component: (resolve) => require(['@/components/HelloWorld1'],resolve)
               
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