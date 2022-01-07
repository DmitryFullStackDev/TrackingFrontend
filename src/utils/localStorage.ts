const loginTokenKey = 'login-token'

export const setLoginToken = (value, isLocal = true) => {
  if (isLocal) {
    localStorage.setItem(loginTokenKey, value)
  } else {
    sessionStorage.setItem(loginTokenKey, value)
  }
}

export const getLoginToken = () => {
  const session = sessionStorage.getItem(loginTokenKey)
  const local = localStorage.getItem(loginTokenKey)
  return session || local
}

export const removeLoginToken = () => {
  sessionStorage.removeItem(loginTokenKey)

  localStorage.removeItem(loginTokenKey)
}
