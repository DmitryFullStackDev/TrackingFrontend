import { toast } from 'react-toastify'
import { call, put, takeLatest } from 'redux-saga/effects'
import API from 'src/api'
import * as actions from './slices'

function* registrationApi(action: ReturnType<typeof actions.registraionApi>) {
  const { payload } = action

  yield put(actions.setIsLoading(true))

  try {
    yield call(() => API.auth.registration.post(payload))
  } catch (err) {
    toast.error(err.data.message)
  }
  yield put(actions.setIsLoading(false))
}

export function* watchAuthRegistration() {
  yield takeLatest(actions.registraionApi.type, registrationApi)
}
