import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import loginReducer from 'src/pages/auth/login/store/slices'
import registraionReducer from 'src/pages/auth/registration/store/slices'
import commonReducer from './common/slices'

const rootReducer = (history: any) =>
  combineReducers({
    pages: combineReducers({
      login: loginReducer,
      registraion: registraionReducer,
    }),
    common: commonReducer,
    router: connectRouter(history),
  })

export default rootReducer
