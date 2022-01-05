import { routerMiddleware } from 'connected-react-router'
import { History, createBrowserHistory } from 'history'
import saga from 'redux-saga'

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import rootReducer from './RootReducer'
import RootSaga from './RootSaga'

export const history: History = createBrowserHistory()

const sagaMiddleware = saga()

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [
    ...getDefaultMiddleware({ thunk: false }),
    routerMiddleware(history),
    sagaMiddleware,
  ],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>

export default store
