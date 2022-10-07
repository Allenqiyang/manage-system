import MYRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const myRequest = new MYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("request success intercept")
      return config
    },
    requestCatch: (err) => {
      console.log("request failed intercept")
      return err
    },
    responseInterceptor: (config) => {
      console.log("response success intercept")
      return config
    },
    responseCatch: (err) => {
      console.log("response failed intercept")
      return err
    }
  }
})

export default myRequest
