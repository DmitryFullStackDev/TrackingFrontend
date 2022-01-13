import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useHistory } from 'react-router-dom'
import { pages } from 'src/constants'
import { getLoginToken } from 'src/utils'

const IsAuth = ({ children }) => {
  const loginToken = getLoginToken()
  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
    if (
      !Boolean(loginToken) &&
      location.pathname !== pages.REGISTRATION &&
      location.pathname !== pages.LOGIN &&
      location.pathname !== pages.UPDATEPASSWORD
    ) {
      history.push({ pathname: pages.LOGIN })
    }
  }, [])

  return <>{children}</>
}

export default IsAuth
