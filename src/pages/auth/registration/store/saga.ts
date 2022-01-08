import { toast } from 'react-toastify'
import { call, put, takeLatest } from 'redux-saga/effects'
import API from 'src/api'
import * as actions from './slices'

function* registrationApi(action: ReturnType<typeof actions.registrationApi>) {
  const { payload } = action

  yield put(actions.setSendStatus('sending'))

  try {
    yield call(() => API.auth.registration.post(payload))

    yield put(actions.setSendStatus('done'))
  } catch (err) {
    toast.error(err.data.message)

    yield put(actions.setSendStatus('waiting'))
  }
}

export function* watchAuthRegistration() {
  yield takeLatest(actions.registrationApi.type, registrationApi)
}
