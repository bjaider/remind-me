import React, {createContext, useState} from 'react'

export const Context = createContext({})

export const ContextProvider = ({children}: any) => {
  const [user, setUser] = useState(null)
  const [events, setEvents] = useState([])
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        events,
        setEvents,
      }}
    >
      {children}
    </Context.Provider>
  )
}
