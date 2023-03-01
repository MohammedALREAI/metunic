import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
export const baseURL = 'https://kayanpay.pro'

const Axios: AxiosInstance = axios.create({
  baseURL: `${baseURL}/api/v1`,
})

Axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const user = localStorage.getItem('user-data') || ''
    const {token} = (user && (JSON.parse(user))) || {token: ''}
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default class API {
  static async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Axios.get(url, config || {})
  }

  static async post<T>(url: string, body: T, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Axios.post(url, body, config || {})
  }

  static async put<T>(url: string, body?: T): Promise<AxiosResponse> {
    return Axios.put(url, body)
  }
  static async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
    return Axios.delete(url, config || {})
  }
}

