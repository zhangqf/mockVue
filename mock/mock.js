import Mock from 'mockjs'

Mock.mock(`api/query_commit_credit`, 'get', () => {
    return {
        code: 0,
        "data": {
            "mtime": "@datetime",//随机生成日期时间
            "score|1-800": 800,//随机生成1-800的数字
            "rank|1-100": 100,//随机生成1-100的数字
            "stars|1-5": 5,//随机生成1-5的数字
            "nickname": "@cname",//随机生成中文名字
        }
    }
})

Mock.mock(`/api/login`, 'post', (option) => {
    const req = JSON.parse(option.body)
    console.log(req)
    if (req.username == 'admin' && req.password == '123') {
        return Mock.mock({
            code: 200,
            "data": {
                "mtime": "@datetime",//随机生成日期时间
                "score|1-800": 800,//随机生成1-800的数字
                "rank|1-100": 100,//随机生成1-100的数字
                "stars|1-5": 5,//随机生成1-5的数字
                "nickname": "@cname",//随机生成中文名字
            }
        })
    } else {
        return {
            code: 0,
            message: "登陆失败"
        }
    }

})