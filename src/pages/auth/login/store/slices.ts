import {
  combineReducers,
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

const prefix = 'page/auth/login/'

export const loginApi = createAction<{
  email: string
  password: string
}>(prefix + 'loginApi')

export const clearStore = createAction(prefix + 'clearStore')

const isLoading = createSlice({
  name: prefix + 'IS_LOADING',
  initialState: false,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) =>
      (state = payload),
  },
})

const isTwoFactAuth = createSlice({
  name: prefix + 'twoFactAuth',
  initialState: false,
  reducers: {
    setIsTwoFactAuth: (state, { payload }: PayloadAction<boolean>) =>
      (state = payload),
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
})

export const { setIsLoading } = isLoading.actions
export const { setIsTwoFactAuth } = isTwoFactAuth.actions

export default combineReducers({
  isLoading: isLoading.reducer,
  isTwoFactAuth: isTwoFactAuth.reducer,
})
