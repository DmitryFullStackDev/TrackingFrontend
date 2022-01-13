import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import forgotPasswordReducer from 'src/pages/auth/forgotPassword/store/slices'
import loginReducer from 'src/pages/auth/login/store/slices'
import registraionReducer from 'src/pages/auth/registration/store/slices'
import updatePassReducer from 'src/pages/auth/updatePass/store/slices'
import commonReducer from './common/slices'

const rootReducer = (history: any) =>
  combineReducers({
    pages: combineReducers({
      login: loginReducer,
      registraion: registraionReducer,
      forgotPassword: forgotPasswordReducer,
      updatePass: updatePassReducer,
    }),
    common: commonReducer,
    router: connectRouter(history),
  })

export default rootReducer
