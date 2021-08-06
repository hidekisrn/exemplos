import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type useFetchReturnType<T> = {
  response: AxiosResponse<T> | null;
  loading: boolean;
  error: Error | null;
};

function useFetch<T>(
  url: string,
  options?: AxiosRequestConfig,
): useFetchReturnType<T> {
  const [response, setData] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url, options);

        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { response, loading, error };
}

export default useFetch;
