import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearStore, setSendStatus, updatePassApi } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    { updatePassApi, clearStore, setSendStatus },
    dispatch,
  )
}
