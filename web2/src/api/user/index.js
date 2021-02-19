import request from '@/request/index.js';
//注册用户
export function addUser(data){
    return request({
        url:"/user/addUser",
        method:"post",
        data:data
    })
}
//用户登录
export function loginUser(data){
    return request({
        url:"/user/logonUser",
        method:"post",
        data:data
    })
}
