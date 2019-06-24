import axios from 'axios'
import { Message } from 'element-ui'

// axios发送请求携带cookie
axios.defaults.withCredentials = true
// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.zhuoyuekecheng.com/ilife/api/', // api 的 base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器 发送请求
service.interceptors.request.use(
  (config) => {
    console.log(config)
    // 发送请求时携带token的接口
    if (sessionStorage.token && config.url !== '') {
      config.headers['token'] = sessionStorage.token // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  (error) => {
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器 对接收的数据进行处理
service.interceptors.response.use(
  (response) => {
    console.log(response)
    const data = response.data
    Message.error(data)
    return data
  },
  (err) => {
    Promise.reject(err)
  }
)
export default service
