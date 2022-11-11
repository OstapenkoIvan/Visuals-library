const BASE_URL =
  "https://my-json-server.typicode.com/OstapenkoIvan/Visuals-library/posts";
const LIMIT = 8;

let total;

export const fetchUsers = async ({ page, method, data }) => {
  const response = await fetch(
    `${BASE_URL}${page ? `?_page=${page}&_limit=${LIMIT}` : "/"}`,
    {
      headers: data === undefined ? {} : { "Content-Type": "application/json" },
      body: data && JSON.stringify(data),
      cache: "no-store",
      method: method,
      observe: "response",
    }
  );
  total = Math.ceil(response.headers.get("X-Total-Count") / LIMIT) || 1;
  const text = await response.text();
  const result = JSON.parse(text);
  return { result, total };
};
