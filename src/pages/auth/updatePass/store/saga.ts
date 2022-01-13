import { toast } from 'react-toastify'
import { put, takeLatest } from 'redux-saga/effects'
import * as actions from './slices'

function* updatePass(action: ReturnType<typeof actions.updatePassApi>) {
  const { payload } = action

  yield put(actions.setSendStatus('sending'))

  try {
    console.log(payload)

    yield put(actions.setSendStatus('done'))
  } catch (e) {
    toast.error(e.data.message)

    yield put(actions.setSendStatus('waiting'))
  }
}

export function* watchUpdatePassLogin() {
  yield takeLatest(actions.updatePassApi.type, updatePass)
}
