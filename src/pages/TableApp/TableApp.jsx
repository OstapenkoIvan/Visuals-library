import React from "react";
import Table from "./Table/Table";

export default function TableApp() {
  return (
    <section className="bg-slate-200 h-screen w-screen relative ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px]">
        <h1 className="text-3xl font-bold underline">Contacts</h1>
        <Table />
      </div>
    </section>
  );
}
