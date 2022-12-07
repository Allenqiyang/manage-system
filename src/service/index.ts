import MYRequest from "./request"
import localCache from "../utils/cache"
import { BASE_URL, TIME_OUT } from "./request/config"

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token')
      if(token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseCatch: (err) => {
      return err
    }
  }
})

export default myRequest
