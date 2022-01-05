import {
  PayloadAction,
  combineReducers,
  createAction,
  createSlice,
} from '@reduxjs/toolkit'

export const decrease = createAction('counter/decrease')

export const logout = createAction('logout')

const isLoading = createSlice({
  name: 'page/IS_LOADING',
  initialState: false,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) =>
      (state = payload),
  },
})

export const { setIsLoading } = isLoading.actions

export default combineReducers({
  isLoading: isLoading.reducer,
})
