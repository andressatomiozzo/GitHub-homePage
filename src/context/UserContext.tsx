import React from "react";

type IUserContext = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (!user) throw new Error("useContext deve estar dentro de um Provider");
  return user;
};

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [userToken, setUserToken] = React.useState<string | null>(null);

  return <UserContext.Provider value={{ userToken, setUserToken }}>{children}</UserContext.Provider>;
};
