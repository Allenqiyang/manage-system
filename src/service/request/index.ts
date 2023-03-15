import axios from "axios"
import { AxiosInstance } from "axios"
import { ElLoading } from "element-plus"
import type { LoadingInstance } from "element-plus/es/components/loading/src/loading"
import "element-plus/theme-chalk/el-loading.css"

import type { MYRequestInterceptor, MYRequestConfig } from "./type"

class MYRequest {
  instance: AxiosInstance
  interceptors?: MYRequestInterceptor
  loading?: LoadingInstance
  showLoading?: boolean

  constructor(config: MYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = true

    // 从传参config中取出的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseCatch
    )

    // 所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if(this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "requesting data"
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res
      },
      (err) => {
        this.loading?.close()
        return err
      }
    )
  }

  request<T>(config: MYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if(config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance.request<any, T>(config).then((res) => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
        
        this.showLoading = true
      }).catch((err) => {
        reject(err)
        this.showLoading = true
        return err
      })
    })
  }

  get<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: "GET"})
  }

  post<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: "POST"})
  }

  delete<T>(config: MYRequestConfig<T>): Promise<T> {
    return this.request<T>({...config, method: "DELETE"})
  }
}

export default MYRequest
