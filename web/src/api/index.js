import request from '@/request/index.js'
//做一个实验
export function addStudent(){
    return request({
        url: '/admin/addStudent',
        method: 'post',
    }) 
};
