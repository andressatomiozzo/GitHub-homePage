import React from "react";
import useFetch from "../hooks/useFetch";

// =========================== Types =============================

type Repository = {
  id: number | bigint;
  full_name: string;
  html_url: string;
  owner: { avatar_url: string };
  [key: string]: unknown;
};

type IRepositoryFetchData = {
  data: Repository[] | null;
  loading: boolean;
  error: { user: string; dev: string } | null;
};

type UserData = {
  accessToken: string;
  user: {
    avatar_url: string;
    bio: string;
    blog: string;
    collaborators: number;
    company: null;
    created_at: string;
    disk_usage: number;
    email: string;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    location: string;
    login: string;
    name: string;
    node_id: string;
    notification_email: string;
    organizations_url: string;
    owned_private_repos: number;
    private_gists: number;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    starred_url: string;
    subscriptions_url: string;
    total_private_repos: number;
    type: string;
    updated_at: string;
    url: string;
    user_view_type: string;
    [key: string]: unknown;
  };
};

type IUserContext = {
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  repositoryFetchData: IRepositoryFetchData | null;
};

// =========================== Código =============================

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (!user) throw new Error("useContext deve estar dentro de um Provider");
  return user;
};

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [userData, setUserData] = React.useState<UserData | null>(null);
  const [userToken, setUserToken] = React.useState<string | null>(null);

  const requestOptions = React.useMemo(
    () => ({
      headers: {
        "X-GitHub-Api-Version": "2026-03-10",
      },
    }),
    [],
  );

  const repositoryFetchData = useFetch<Repository[]>("GET /user/repos", requestOptions, userToken);
  return (
    <UserContext.Provider value={{ userData, setUserData, userToken, setUserToken, repositoryFetchData }}>
      {children}
    </UserContext.Provider>
  );
};
