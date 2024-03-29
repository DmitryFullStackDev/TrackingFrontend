import { toast } from 'react-toastify'
import { call, put, select, takeLatest } from 'redux-saga/effects'
import API from 'src/api'
import { setLoginToken } from 'src/utils'
import * as actions from './slices'

function* loginApi(action: ReturnType<typeof actions.loginApi>) {
  const { payload } = action

  const { isRemember } = yield select(state => state.pages.login)

  yield put(actions.setIsLoading(true))

  try {
    const { data } = yield call(() => API.auth.login.post(payload))
    yield setLoginToken(data.access_token, isRemember)

    /*   yield put(push(pages.HOME)) */
  } catch (e) {
    toast.error(e.data.message)
  }
  yield put(actions.setIsLoading(false))
}

export function* watchAuthLogin() {
  yield takeLatest(actions.loginApi.type, loginApi)
}
