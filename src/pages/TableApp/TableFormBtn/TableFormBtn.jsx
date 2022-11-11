import React from "react";

export default function TableFormBtn({ formRef }) {
  console.log(formRef);
  const handleClick = () => {
    console.log(formRef);
  };
  return (
    <button
      onClick={handleClick}
      className="block w-[650px] bg-green-500 py-1 font-semibold text-white hover:text-gray-500 rounded-b-md active:shadow-lg active:text-gray-700"
    >
      Add Contact
    </button>
  );
}
