import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearStore, forgontPasswordApi, setSendStatus } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    { setSendStatus, forgontPasswordApi, clearStore },
    dispatch,
  )
}
