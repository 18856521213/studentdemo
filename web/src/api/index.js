import request from '@/request/index.js'
//做一个实验
export function shiyan(){
    return request({
        url: './home',
        methods: 'get',
    }) 
}