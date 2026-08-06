import React from "react";
import { Octokit } from "octokit";
import type { RequestParameters } from "@octokit/types";
import { useUserContext } from "../context/UserContext";

type IUseFetch<T> = {
  data: T[] | null;
  loading: boolean;
  error: { user: string; dev: string } | null;
};

const useFetch = <T,>(url: string, options: RequestParameters): IUseFetch<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<{ user: string; dev: string } | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { userToken } = useUserContext();

  const octokit = React.useMemo(() => {
    if (!userToken) return null;

    return new Octokit({
      auth: userToken,
    });
  }, [userToken]);

  React.useEffect(() => {
    const searchRepositories = async () => {
      if (userToken && octokit) {
        setLoading(true);
        setError(null);
        setData(null);
        try {
          const response = await octokit.request(url, options);

          setData(response.data as T);
        } catch (err) {
          console.error(err);
          if (err instanceof Error)
            setError({ user: "Seu token expirou ou está incorreto, verifique o seu token", dev: err.message });
        } finally {
          setLoading(false);
        }
      }
    };
    searchRepositories();
  }, [userToken, url, options, octokit]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
