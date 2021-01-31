import request from '@/request/index.js';

export function addStudent(data){
    return request({
        url:"/admin/addStudent",
        method:"post",
        data:data
    })
}