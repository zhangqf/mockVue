import request from "../common/request"

export function logins(){
    return request({
        url:'api/query_commit_credit',
        method:"get"
    })
}

export function login(query){
    return request({
        url:'/api/login',
        method:"post",
        data:query
    })
}

export function getRouterByRole(query){
    return request({
        url:'/api/useInfo',
        method:"get",
        data:query
    })
}

export function getTableList(){
    return request({
        url:'/api/tableList',
        method:"get",
    })
}





