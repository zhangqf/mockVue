import Vue from 'vue'
import Vuex from 'vuex'
import { SAVE_TOKEN, GET_TOKEN, SAVE_NAME, GET_NAME } from './mutation-types'
import { login } from "@/api/login";
// import { Message } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/utils/to'
import { to } from '../utils/to';
Vue.use(Vuex)
Vue.use(ElementUI)

const v = new Vue()

const store = new Vuex.Store({
    state: {

    },
    getters:{
        getToken:state => state.login.token
    },
    modules: {
        login: {
            namespaced: true,
            state: {
                token: undefined,
                name: undefined,
            },
            mutations: {
                [SAVE_TOKEN](state, val) {
                    state.token = val
                },
                [SAVE_NAME](state, val) {
                    state.name = val
                }
            },
            actions: {
                async login({ commit }, userInfo) {
                    const [err,ret] = await to(login(userInfo))
                    if(err){
                        v.$message({
                            type:'error',
                            message:err.message,
                            duration:5000
                        })
                    }else{
                        const {data:data} = ret
                        commit(SAVE_TOKEN,data.token)
                        commit(SAVE_NAME,data.nickname)
                    }
                    // try{
                    // console.log(userInfo)
                    // const {data} = await login(userInfo)
                    // console.log(data)
                    // commit(SAVE_TOKEN,data.token)
                    // commit(SAVE_NAME,data.nickname)
                    // }catch(error){
                    //     console.log(error)
                    //     v.$message({
                    //         type:'error',
                    //         message:error
                    //     })
                    //     // Message({
                    //     //     message: error,
                    //     //     type: 'error',
                    //     //     duration: 5 * 1000
                    //     //   })
                    // }
                }
            },

        }
    },
})

export default store