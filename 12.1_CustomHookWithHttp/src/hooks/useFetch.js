import { useState, useEffect } from "react";

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Request failed!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

const useFetch = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = fetchData();
    setData(data);
    // return () => {
    //   cleanup
    // }
  }, []);

  return data;
};

export default useFetch;
