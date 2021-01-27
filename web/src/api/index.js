import request from '@/request/index.js'
//做一个实验
export function shiyan(){
    return request({
        url: '/admin/home',
        method: 'get',
    }) 
};
//做一个实验2
export function time(data){
    return request({
        url: '/admin/time',
        method: 'post',
        data:data
    }) 
};
