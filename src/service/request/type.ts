import type { AxiosRequestConfig } from "axios"

export interface MYRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseCatch?: (error: any) => any
}

export interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptor
  showLoading?: boolean
}