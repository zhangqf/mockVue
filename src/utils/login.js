import store from '../store/index'

export function hasToken(){
    return store.getters.getToken
}