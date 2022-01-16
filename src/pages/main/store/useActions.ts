import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearStore, loginApi, setIsRemember } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators({ loginApi, clearStore, setIsRemember }, dispatch)
}
