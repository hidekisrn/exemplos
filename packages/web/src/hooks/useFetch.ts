import { useState, useEffect } from 'react';

type useFetchReturnType<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

function useFetch<T>(
  url: string,
  options: RequestInit = {},
): useFetchReturnType<T> {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, options);
        const json = await res.json();

        setData(json ?? null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error };
}

export default useFetch;
