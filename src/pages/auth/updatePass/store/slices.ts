import {
  combineReducers,
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { sendStatusType } from 'src/types'

const prefix = 'page/auth/updatePassword/'

export const updatePassApi = createAction<any>(prefix + 'updatePassApi')

export const clearStore = createAction(prefix + 'clearStore')

const sendStatusInit = 'waiting' as sendStatusType

const sendStatus = createSlice({
  name: prefix + '/sendStatus',
  initialState: sendStatusInit,
  reducers: {
    setSendStatus: (state, { payload }: PayloadAction<sendStatusType>) =>
      (state = payload),
  },
  extraReducers: {
    [clearStore.type]: () => sendStatusInit,
  },
})

export const { setSendStatus } = sendStatus.actions

export default combineReducers({
  sendStatus: sendStatus.reducer,
})
