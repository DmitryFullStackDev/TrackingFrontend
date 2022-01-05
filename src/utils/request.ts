import axios from 'axios'
import { ENV } from 'src/constants'
import { getLoginToken, removeLoginToken } from 'src/utils'

const request = axios.create({ baseURL: ENV.API_URL })

request.interceptors.request.use(
  config => {
    const token = getLoginToken()
    const newConfig = config

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`
    }

    return newConfig
  },
  err => Promise.reject(err),
)

request.interceptors.response.use(
  res => res,
  error => {
    if (error.response && 401 === error.response.status) {
      removeLoginToken()

      if (location.pathname !== '/login') {
        location.href = '/login'
      }

      window.location.reload()
    }

    if (error.response && 422 === error.response.status) {
      return Promise.reject(error)
    }

    return Promise.reject(error.response)
  },
)

export { request }
