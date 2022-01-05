import { pages as p } from 'src/constants'
import Login from 'src/pages/auth/login/Login'

const withAuth = []

const withoutAuth = [
  {
    path: p.LOGIN,
    component: Login,
  },
]
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const pages = { withoutAuth, withAuth }

export default pages
