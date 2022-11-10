import React from "react";
import { cell, headerCell } from "../styling";
import TableRow from "../TableRow/TableRow";
cell;

const Table = () => {
  let contactsArr = [
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
    {
      firstName: "john",
      lastName: "Wick",
      city: "Odessa",
      number: 933822212,
      email: "john@wick.com",
    },
  ];

  return (
    <div>
      <table className="w-full whitespace-nowrap block overflow-y-auto">
        <thead className="w-fit">
          <tr>
            <th className={`${headerCell} ${cell} sticky top-0`}>First Name</th>
            <th className={`${headerCell} ${cell} sticky top-0`}>Last Name</th>
            <th className={`${headerCell} ${cell} sticky top-0`}>Number</th>
            <th className={`${headerCell} ${cell} sticky top-0`}>City</th>
            <th className={`${headerCell} ${cell} sticky top-0`}>Email</th>
          </tr>
        </thead>
        <tbody className="h-[160px] ">
          {contactsArr.map((contact) => (
            <TableRow key={contact.id} data={contact} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
