import { useEffect, useState, useRef } from "react";
import { cell, headerCell } from "../styling";
import { fetchUsers } from "../TableApi/postsApi";
import TableRow from "../TableRow/TableRow";

const Table = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const container = useRef();

  let contactsArr = [
    {
      id: 1,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 2,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 3,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 4,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 5,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 6,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 7,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      id: 8,
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
  ];

  //   const [data, isLoading] = usePost({
  //     data: {
  //       firstName: "Nick",
  //       lastName: "Pick",
  //       city: "Kiev",
  //       number: 933822212,
  //       email: "nick@wick.com",
  //     },
  //     start: true,
  //   });

  useEffect(() => {
    if (isLoading) return;
    setIsLoading(true);

    fetchUsers({ page, method: "GET" })
      .then(({ result, total }) => {
        Array.isArray(result)
          ? setData((prevData) => [...prevData, ...result])
          : setData((prevData) => [...prevData, result]);
        setTotal(total);
        return;
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [page]);
  console.log(data);

  const handleScroll = (e) => {
    if (total === page) return;
    const { scrollHeight, scrollTop, clientHeight } = container.current;
    const isAtBottom = scrollHeight - scrollTop <= clientHeight;
    if (isAtBottom) setPage((page) => page + 1);
  };

  return (
    <div>
      <table className="w-full whitespace-nowrap ">
        <thead className="w-fit block">
          <tr>
            <th className={`${headerCell} ${cell} rounded-tl-md`}>
              First Name
            </th>
            <th className={`${headerCell} ${cell}`}>Last Name</th>
            <th className={`${headerCell} ${cell}`}>Number</th>
            <th className={`${headerCell} ${cell}`}>City</th>
            <th className={`${headerCell} ${cell} rounded-tr-md`}>Email</th>
          </tr>
        </thead>
        <tbody
          ref={container}
          className="h-[160px] block overflow-auto border-green-500 border border-solid"
          onScroll={handleScroll}
        >
          {data?.map((contact) => (
            <TableRow key={contact.id} data={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
