import store from '../store/index'

export function hasToken(){
    // console.log(store.getters)
    return store.getters.getToken
}