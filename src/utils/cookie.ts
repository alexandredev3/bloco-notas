import Cookies from 'js-cookie'

export function getCookie() {
  const token = Cookies.get('authorization')

  return token
}