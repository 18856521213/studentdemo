import request from '@/request/index.js'
//做一个实验
export function shiyan(){
    return request({
        url: '/home',
        method: 'get',
    }) 
};
//做一个实验2
export function time(data){
    return request({
        url: '/time',
        method: 'post',
        data:data
    }) 
};
