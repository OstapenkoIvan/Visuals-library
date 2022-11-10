import React from "react";
import { cell } from "../styling";

export default function TableRow({ data }) {
  const { firstName, lastName, city, number, email } = data;
  return (
    <tr>
      <td className={`${cell}`}>{firstName}</td>
      <td className={`${cell}`}>{lastName}</td>
      <td className={`${cell}`}>{number}</td>
      <td className={`${cell}`}>{city}</td>
      <td className={`${cell}`}>{email}</td>
    </tr>
  );
}
