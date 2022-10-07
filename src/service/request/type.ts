import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface MYRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseCatch?: (error: any) => any
}

export interface MYRequestConfig extends AxiosRequestConfig {
  interceptors?: MYRequestInterceptor
}