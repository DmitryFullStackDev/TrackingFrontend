import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearStore, forgontPassword, setSendStatus } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    { setSendStatus, forgontPassword, clearStore },
    dispatch,
  )
}
