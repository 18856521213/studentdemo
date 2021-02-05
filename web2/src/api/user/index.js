import request from '@/request/index.js';
//注册用户
export function addUser(data){
    return request({
        url:"/user/addUser",
        method:"post",
        data:data
    })
}