import React from "react";
import { Octokit } from "octokit";
import type { RequestParameters } from "@octokit/types";

type IUseFetch<T> = {
  data: T | null;
  loading: boolean;
  error: { user: string; dev: string } | null;
};

const useFetch = <T,>(url: string, options: RequestParameters, token: string | null): IUseFetch<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<{ user: string; dev: string } | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const octokit = React.useMemo(() => {
    if (!token) return null;

    return new Octokit({
      auth: token,
    });
  }, [token]);

  React.useEffect(() => {
    const searchRepositories = async () => {
      if (token && octokit) {
        setLoading(true);
        setError(null);
        setData(null);
        try {
          const response = await octokit.request(url, options);

          setData(response.data);
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
  }, [token, url, options, octokit]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
