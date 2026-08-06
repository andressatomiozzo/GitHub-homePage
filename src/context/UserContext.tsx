import React from "react";
import useFetch from "../hooks/useFetch";

// =========================== Types =============================

type Repository = {
  id: number | bigint;
  full_name: string;
  html_url: string;
  [key: string]: unknown;
};

type repositoryFetchData = {
  data: Repository[] | null;
  loading: boolean;
  error: { user: string; dev: string } | null;
};

type IUserContext = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  repositoryFetchData: repositoryFetchData;
};

// =========================== Código =============================

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (!user) throw new Error("useContext deve estar dentro de um Provider");
  return user;
};

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [userToken, setUserToken] = React.useState<string | null>(null);
  const repositoryFetchData = useFetch<Repository[]>("GET /user/repos", {
    headers: {
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });

  return (
    <UserContext.Provider value={{ userToken, setUserToken, repositoryFetchData }}>{children}</UserContext.Provider>
  );
};
