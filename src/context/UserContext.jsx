import React from 'react'

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = React.useState("");

  return <UserContext value={{user, setUser}}>{children}</UserContext>
}

