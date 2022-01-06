import { all, fork } from 'redux-saga/effects'
import { watchAuthForgotPassword } from 'src/pages/auth/forgotPassword/store/saga'
import { watchAuthLogin } from 'src/pages/auth/login/store/saga'
import { watchAuthRegistration } from 'src/pages/auth/registration/store/saga'
import { watchCommon } from './common/sagas'

export default function* RootSaga() {
  yield all([fork(watchCommon)])
  yield all([fork(watchAuthLogin)])
  yield all([fork(watchAuthRegistration)])
  yield all([fork(watchAuthForgotPassword)])
}
