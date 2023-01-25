import { getCookie } from '@/utils/cookies'
import React, { createContext, useContext, useEffect, useState } from 'react'

interface IAppContext {
  user: any
}

const AppContext = createContext<IAppContext>({} as IAppContext)

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    const userCookie = getCookie('user.data')
    setUser(userCookie?.value)
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
