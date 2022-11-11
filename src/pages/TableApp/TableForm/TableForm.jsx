import React from "react";

export default function TableForm({ formRef }) {
  return (
    <form ref={formRef} className="flex flex-col w-[400px] mx-auto mt-4">
      <label htmlFor="firstName" className="py-1">
        First Name
      </label>
      <input type="text" id="firstName" className="px-2 py-1 rounded-sm" />
      <label htmlFor="lastName" className="py-1">
        Last Name
      </label>
      <input type="text" id="lastName" className="px-2 py-1 rounded-sm" />
      <label htmlFor="number" className="py-1">
        Number
      </label>
      <input type="text" id="number" className="px-2 py-1 rounded-sm" />
      <label htmlFor="city" className="py-1">
        City
      </label>
      <input type="text" id="city" className="px-2 py-1 rounded-sm" />
      <label htmlFor="email" className="py-1">
        Email
      </label>
      <input type="email" id="email" className="px-2 py-1 rounded-sm" />
      <input type="submit" />
    </form>
  );
}
