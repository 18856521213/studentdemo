import request from '@/request/index.js';
//添加学生
export function addStudent(data){
    return request({
        url:"/admin/addStudent",
        method:"post",
        data:data
    })
}
//查找学生列表
export function getStudentList(data){
    return request({
        url:"/admin/findStudent",
        method:"post",
        data:data
    })
}
