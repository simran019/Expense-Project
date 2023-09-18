"use client";

import { useState } from "react";

const ExpenseFilter = (props:any) => {
  

  const clickHandler = (event: any) => {
    const selectedYear = event.target.value;
    // setFilterYear(selectedYear);
    props.onFilterYear(selectedYear)
  };

  return (
    <div className="bg-gray-800 w-full rounded-md p-4 text-slate-100 flex justify-between">
      <h1 className="text-xl font-bold">Filter by year</h1>
      <select
        className="border-black border-2 rounded-md p-2 text-black"
        onChange={clickHandler}
      >
        <option value="none">Select Year</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      {/* <p>Data for years {filterInfoText} is hidden</p> */}
    </div>
  );
};

export default ExpenseFilter;
