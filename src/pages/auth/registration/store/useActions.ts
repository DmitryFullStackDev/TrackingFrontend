import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { registraionApi } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators({ registraionApi }, dispatch)
}
