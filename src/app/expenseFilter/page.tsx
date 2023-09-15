"use client";

import { useState } from "react";

const ExpenseFilter = (props:any) => {
  const [filterYear, setFilterYear] = useState("2020");

   let filterInfoText='2020, 2021 and 2022';
   if(filterYear==='2020'){
    filterInfoText='2021, 2022 and 2023';
   } else if(filterYear==='2021'){
    filterInfoText='2020, 2022 and 2023'
   }else if(filterYear==='2022'){
    filterInfoText='2020, 2021 and 2023'
   }else{
    filterInfoText='2020, 2021 and 2022'
   }

  const clickHandler = (event: any) => {
    const selectedYear = event.target.value;
    setFilterYear(selectedYear);
    props.onFilterYear(selectedYear)
  };

  return (
    <div className="bg-gray-100 w-full rounded-md p-4 text-black flex justify-between">
      <h1 className="text-xl font-bold">Filter by year</h1>
      <select
        className="border-black border-2 rounded-md p-2"
        onChange={clickHandler}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <p>Data for years {filterInfoText} is hidden</p>
    </div>
  );
};

export default ExpenseFilter;
