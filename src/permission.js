import router from './router/index'
import { hasToken } from '@/utils/login'
import { useInfo } from '@/api/login'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})

router.beforeEach((to, from, next) => {
    NProgress.start()
    console.log("///", hasToken())
    if (hasToken()) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            // 根据用户信息获取响应的数据
            // store.dispatch('login/userInfo',store.getters.role)
            // 获取用户信息
            next()

        }
    } else {
        console.log('>', hasToken())
        if (to.path === '/login') {
            next()
        } else {
            next(`/login?redirect=${to.fullPath}`)
            NProgress.done()
        }

    }
})
router.afterEach(() => {
    NProgress.done()
  })
  