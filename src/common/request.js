import axios from 'axios'


const service = axios.create({
    // baseURL
    timeout: 3000
})
service.interceptors.request.use(config => {
    return config;
},
    error => {
        return Promise.reject(error)
    }

)

service.interceptors.response.use(res => {
    console.log(res)
    if(res.status==200){
        const {data:data} = res
        if(data.code==200){
            return data
        }
        if(data.code==0){
            return Promise.reject(data)
        }
    }else{
        return Promise.reject(error)
    }
}, error => {
    return Promise.reject(error)
})

export default service