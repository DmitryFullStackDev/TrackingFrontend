import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registrationApi, setSendStatus } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators({ setSendStatus, registrationApi }, dispatch)
}
