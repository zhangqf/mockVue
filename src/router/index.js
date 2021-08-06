import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login/login'


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
          meta:{title:'表格'},
          path:'/dash',
          name:"dash",
          component: (resolve) => require(['@/view/form/myform'],resolve)
   
        },
        {
          meta:{title:'表单'},
          path:'/nav',
          name:"nav",
          component: (resolve) => require(['@/view/table/mytable'],resolve)
   
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
            redirect:"/page/a/abc",
            component: (resolve) => require(['@/components/HelloWorld1'],resolve),
            children:[{
              path:"abc",
              meta:{title:'abc'},
              name:"abc",
              component: (resolve) => require(['@/components/HelloWorld1'],resolve),
            },{
              path:"dbc",
              meta:{title:'dbc'},
              name:"dbc",
              component: (resolve) => require(['@/components/HelloWorld1'],resolve),
            }]
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


export default router