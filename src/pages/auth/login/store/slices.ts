import {
  combineReducers,
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { loginApiPayload } from 'src/types'

const prefix = 'page/auth/login/'

export const loginApi = createAction<loginApiPayload>(prefix + 'loginApi')

export const clearStore = createAction(prefix + 'clearStore')

const isLoading = createSlice({
  name: prefix + '/isLoading',
  initialState: false as boolean,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) =>
      (state = payload),
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
})

const isRemember = createSlice({
  name: prefix + '/isRemember',
  initialState: false as boolean,
  reducers: {
    setIsRemember: (state, { payload }: PayloadAction<boolean>) =>
      (state = payload),
  },
})

export const { setIsLoading } = isLoading.actions
export const { setIsRemember } = isRemember.actions

export default combineReducers({
  isLoading: isLoading.reducer,
  isRemember: isRemember.reducer,
})
