import { baseUrl } from './env'
import axios from 'axios'

// 创建axios实例
const $axios = axios.create({
  baseURL: baseUrl, // api的base_url
  timeout: 10 * 1000 // 请求超时时间
})

// response 拦截器
$axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.hasOwnProperty('Status') && res.Status !== 1) {
      return Promise.reject(res)
    }
    return res.hasOwnProperty('Data') ? res.Data : res
  },
  error => {
    console.log('err' + error)
    return Promise.reject({
      Status: -1,
      Message: error.message
    })
  }
)

export default $axios
