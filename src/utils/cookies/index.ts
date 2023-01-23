import Cookies from 'universal-cookie'
const cookies = new Cookies()

export const clearAllCoookies = () => {
  const keys = Object.keys(cookies.getAll())
  keys.forEach(key => cookies.remove(key))
}

export const getCookie = (name: string) => {
  const cookie = cookies.get(name)
  return { status: !!cookie, value: cookie }
}
