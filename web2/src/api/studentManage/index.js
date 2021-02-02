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
//删除学生
export function deleteStudent(data){
    return request({
        url:"/admin/deleteStudent",
        method:"post",
        data:data
    })
}
//更新学生资料
export function updateStudent(data){
    return request({
        url:"/admin/updateStudent",
        method:"post",
        data:data
    })
}
//下载模板
export function uploadExcel(data){
    return request({
        url:"/admin/uploadExcel",
        method:"post",
        data:data,
        responseType: "blob",
    })
}
