import React, { createContext, useContext, useEffect, useState } from 'react'
import { clearAllCoookies, getCookie } from '@/utils/cookies'
import { useRouter } from 'next/router'

interface IAppContext {
  user: any
}

const AppContext = createContext<IAppContext>({} as IAppContext)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter()
  const [user, setUser] = useState<any>()

  useEffect(() => {
    const userData = getCookie('user.data')
    const userToken = getCookie('user.token')

    if (!userData.status || !userToken.status) {
      clearAllCoookies()
      router.push('/')
    }

    setUser(userData?.value)
  }, [])

  return (
    <AppContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export default AppProvider
