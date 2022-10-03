import React, {createContext, useState} from 'react'

export const Context = createContext({})

export const ContextProvider = ({children}: any) => {
  const [user, setUser] = useState(null)
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        /* loggued: () => {
          return localStorage.getItem("key") ? true : false;
        }, */
      }}
    >
      {children}
    </Context.Provider>
  )
}
