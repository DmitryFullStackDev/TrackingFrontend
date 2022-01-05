const loginTokenKey = 'login-token'

export const setLoginToken = value => localStorage.setItem(loginTokenKey, value)
export const getLoginToken = () => localStorage.getItem(loginTokenKey)
export const removeLoginToken = () => localStorage.removeItem(loginTokenKey)
