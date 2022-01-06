import {
  combineReducers,
  createAction,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'

const prefix = 'page/auth/registraion'

export const registraionApi = createAction<any>(prefix + '/registraionApi')

export const clearStore = createAction(prefix + 'clearStore')

const isLoading = createSlice({
  name: prefix + '/isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) =>
      (state = payload),
  },
  extraReducers: {
    [clearStore.type]: () => false,
  },
})

export const { setIsLoading } = isLoading.actions

export default combineReducers({
  isLoading: isLoading.reducer,
})
