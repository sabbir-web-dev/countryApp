import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoadding, setIsLoadding] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadding(true);

      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Data not Fetch");
        }

        const data = await res.json();
        setIsLoadding(false);
        setData(data);
      } catch (error) {
        setIsLoadding(false);
        setData(null);
        setError(error.message);
      }
    };
    fetchData();
  }, [url]);
  return { isLoadding, data, error };
};

export default useFetch;
