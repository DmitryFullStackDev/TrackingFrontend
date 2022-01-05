import { push } from 'connected-react-router'
import { toast } from 'react-toastify'
import { put, takeLatest } from 'redux-saga/effects'
import { pages } from 'src/constants'
import { removeLoginToken } from 'src/utils'
import * as actions from './slices'

function* setIsLoadingPageWorker(
  action: ReturnType<typeof actions.setIsLoading>,
) {
  const { payload } = action

  yield actions.setIsLoading(payload)
}

function* logoutWorker() {
  try {
    yield /* call(() => API.auth.logout.post()) */

    removeLoginToken()

    yield put(push(pages.LOGIN))
  } catch (e) {
    toast.error(e.data.message)
  }
}

export function* watchCommon() {
  yield takeLatest(actions.setIsLoading.type, setIsLoadingPageWorker)
  yield takeLatest(actions.logout.type, logoutWorker)
}
