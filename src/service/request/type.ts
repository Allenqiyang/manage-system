import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface MYRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseCatch?: (error: any) => any
}

export interface MYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptor<T>
  showLoading?: boolean
}