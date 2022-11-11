import { useEffect, useState, useCallback } from "react";

const BASE_URL =
  "https://my-json-server.typicode.com/OstapenkoIvan/Visuals-library/posts";

// export default function useFetch(page) {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);

//     fetch(`${BASE_URL}?_page=${page}&_limit=5`, {
//       method: "GET",
//       headers: {
//         "Content-Type": application / json,
//       },
//     })
//       .then((data) => data.json())
//       .then((data) => setData((prevData) => [...prevData, data]))
//       .catch((error) => console.log(error.message))
//       .finally(() => setIsLoading(false));
//   }, [page]);

//   return { data, isLoading };
// }

export function useFetch({ page, method, data, start }) {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusCode, setCode] = useState(-1);

  const fetchData = useCallback(async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    const response = await fetch(
      `${BASE_URL}${page ? `?_page=${page}&_limit=8` : "/"}`,
      {
        headers:
          data === undefined ? {} : { "Content-Type": "application/json" },
        body: data && JSON.stringify(data),
        cache: "no-store",
        method: method,
      }
    );

    setCode(response.status);

    try {
      console.log("response", response);
      const text = await response.text();
      const data = JSON.parse(text);
      console.log("data", data);
      Array.isArray(data)
        ? setResult((prevData) => [...prevData, ...data])
        : setResult((prevData) => [...prevData, data]);
    } catch (err) {
      setResult({});
    }

    setIsLoading(false);
  }, [page, data, isLoading, statusCode]);

  useEffect(() => {
    if (start) {
      fetchData();
    }
  }, [fetchData, start]);

  const refresh = () => {
    fetchData();
  };

  return [result, isLoading, refresh, statusCode];
}

export function useGet({ page, start }) {
  return useFetch({ page, method: "GET", start });
}

export function usePost({ start, data }) {
  const fetchResult = useFetch({ method: "POST", start, data });
  return fetchResult;
}
