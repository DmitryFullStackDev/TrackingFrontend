import { toast } from 'react-toastify'
import { call, put, takeLatest } from 'redux-saga/effects'
import API from 'src/api'
import * as actions from './slices'

function* loginApi(action: ReturnType<typeof actions.forgontPasswordApi>) {
  const { payload } = action

  yield put(actions.setSendStatus('sending'))

  try {
    yield call(() => API.auth.forgotPassword.post(payload))

    yield put(actions.setSendStatus('done'))
  } catch (e) {
    toast.error(e.data.message)

    yield put(actions.setSendStatus('waiting'))
  }
}

export function* watchAuthForgotPassword() {
  yield takeLatest(actions.forgontPasswordApi.type, loginApi)
}
