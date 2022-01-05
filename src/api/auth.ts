import { urls } from 'src/constants'
import { request } from 'src/utils'

const auth = {
  login: {
    post(data) {
      return request.post(urls.auth.login, data)
    },
  },
  logout: {
    post() {
      return request.post(urls.auth.logout)
    },
  },
  registration: {
    post(data) {
      return request.post(urls.auth.registration, data)
    },
  },

  forgotPassword: {
    post(data: { email }) {
      return request.post(urls.auth.forgotPassword, data)
    },
  },
  resetPassword: {
    post(data) {
      return request.post(urls.auth.resetPassword, data)
    },
  },
}

export default auth
