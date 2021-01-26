import axios from 'axios'

axios.create({
    baseURL:"http",
    timeout:1000*60*10
})