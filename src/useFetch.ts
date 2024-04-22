import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const respone = await fetch(url);
        const data = await respone.json();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, [url]);

  return { countries, loading };
};

export default useFetch;
