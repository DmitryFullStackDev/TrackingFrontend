import {
  combineReducers,
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { emailType, sendStatusType } from 'src/types'

const prefix = 'page/auth/forgotPassword/'

export const forgontPassword = createAction<emailType>(
  prefix + 'forgontPasswordApi',
)

export const clearStore = createAction(prefix + 'clearStore')

const sendStatus = createSlice({
  name: prefix + '/sendStatus',
  initialState: 'waiting',
  reducers: {
    setSendStatus: (state, { payload }: PayloadAction<sendStatusType>) =>
      (state = payload),
  },
  extraReducers: {
    [clearStore.type]: () => 'waiting',
  },
})

export const { setSendStatus } = sendStatus.actions

export default combineReducers({
  sendStatus: sendStatus.reducer,
})
