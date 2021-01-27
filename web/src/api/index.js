import request from '@/request/index.js'
//做一个实验
export function shiyan(data){
    return request({
        url: './home',
        methods: 'get',
        data
    }) 
}