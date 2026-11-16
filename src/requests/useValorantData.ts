import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://valorant-api.com/v1";

// One request per endpoint for the whole session, shared between pages.
const cache: { [path: string]: Promise<unknown> } = {};

function request<T>(path: string): Promise<T> {
  if (!cache[path]) {
    cache[path] = axios
      .get<{ data: T }>(`${API_URL}${path}`)
      .then((res) => res.data.data)
      .catch((error) => {
        delete cache[path];
        throw error;
      });
  }
  return cache[path] as Promise<T>;
}

const useValorantData = <T>(path: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(false);
    request<T[]>(path)
      .then((result) => {
        if (active) setData(result);
      })
      .catch(() => {
        if (active) setError(true);
      })
      .then(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [path]);

  return { data, loading, error };
};

export default useValorantData;
