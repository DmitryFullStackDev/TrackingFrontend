import { pages as p } from 'src/constants'
import ForgotPassword from 'src/pages/auth/forgotPassword'
import Login from 'src/pages/auth/login'
import Registration from 'src/pages/auth/registration'

const withAuth = []

const withoutAuth = [
  {
    path: p.LOGIN,
    component: Login,
  },
  {
    path: p.REGISTRATION,
    component: Registration,
  },
  {
    path: p.FORGOTPASSWORD,
    component: ForgotPassword,
  },
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const pages = { withoutAuth, withAuth }

export default pages
