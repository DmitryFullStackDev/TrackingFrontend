import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from './slices'

export default () => {
  const dispatch = useDispatch()

  return bindActionCreators({ logout }, dispatch)
}
