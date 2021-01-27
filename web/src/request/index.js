import axios from 'axios'

// 创建一个axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // 完整url = baseUrl + requestUrl
    timeout: 5000  // 请求超时时间
  })

  export default service