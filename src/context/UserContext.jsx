import React from 'react'

export const UserContext = React.createContext();

export const UserProvider = ({children}) => {
  const [userToken, setUserToken] = React.useState("");

  return <UserContext value={{userToken, setUserToken}}>{children}</UserContext>
}

