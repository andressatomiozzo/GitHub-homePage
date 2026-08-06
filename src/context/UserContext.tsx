import React from "react";
import { Octokit } from "octokit";

type Repository = {
  id: number | bigint;
  full_name: string;
  html_url: string;
  [key: string]: unknown;
};

type IUserContext = {
  userToken: string | null;
  setUserToken: React.Dispatch<React.SetStateAction<string | null>>;
  repositoryData: Repository[] | null;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUserContext = () => {
  const user = React.useContext(UserContext);
  if (!user) throw new Error("useContext deve estar dentro de um Provider");
  return user;
};

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [userToken, setUserToken] = React.useState<string | null>(null);
  const [repositoryData, setRepositoryData] = React.useState<Repository[] | null>(null);

  const octokit = new Octokit({
    auth: userToken,
  });

  React.useEffect(() => {
    const searchRepositories = async () => {
      if (userToken) {
        try {
          const octokit = new Octokit({
            auth: userToken.trim(),
          });

          const { data } = await octokit.request("GET /user/repos", {
            headers: {
              "X-GitHub-Api-Version": "2026-03-10",
            },
          });

          setRepositoryData(data);
        } catch (err) {
          console.error(err);
        }
      }
    };
    searchRepositories();
  }, [userToken]);

  return <UserContext.Provider value={{ userToken, setUserToken, repositoryData }}>{children}</UserContext.Provider>;
};
