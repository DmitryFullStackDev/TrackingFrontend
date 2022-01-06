import { all, fork } from 'redux-saga/effects'
import { watchAuthLogin } from 'src/pages/auth/login/store/saga'
import { watchAuthRegistration } from 'src/pages/auth/registration/store/saga'
import { watchCommon } from './common/sagas'

export default function* RootSaga() {
  yield all([fork(watchCommon)])
  yield all([fork(watchAuthLogin)])
  yield all([fork(watchAuthRegistration)])
}
