import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearStore, loginApi } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators({ loginApi, clearStore }, dispatch)
}
