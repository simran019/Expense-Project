"use client";

import { useId, useState } from "react";

import Card from "./card/page";
import ExpenseItem from "./expenseItem/page";
import NewExpense from "./newExpense/page";
import Chart from "./chart/page";

import Image from "next/image";
import ExpenseFilter from "./expenseFilter/page";
import ExpenseList from "./expenselist/page";

export default function Home() {
  const dataFromAPI = [
    {
      id: "e1",
      title: "Grocery",
      amount: "250",
      date: new Date(2020, 8, 23),
    },
    {
      id: "e2",
      title: "Shopping",
      amount: "150",
      date: new Date(2020, 7, 21),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "250",
      date: new Date(2022, 6, 28),
    },
    {
      id: "e4",
      title: "Health Insurance",
      amount: "250",
      date: new Date(2023, 6, 15),
    },
  ];

  const [expenses, setExpenses] = useState(dataFromAPI);

  const onSaveHandler = (expenseData: any) => {
    const finalExpenseData = {
      ...expenseData,
      id: Math.random(),
    };
    // console.log(finalExpenseData)
    setExpenses((prevState) => {
      return [expenseData, ...expenses];
    });
  };
  const [filterYear, setFilterYear] = useState("none");

  let filterInfoText = "2020, 2021 and 2022";
  if (filterYear === "2020") {
    filterInfoText = "2021, 2022 and 2023";
  } else if (filterYear === "2021") {
    filterInfoText = "2020, 2022 and 2023";
  } else if (filterYear === "2022") {
    filterInfoText = "2020, 2021 and 2023";
  } else {
    filterInfoText = "2020, 2021 and 2022";
  }
  const onFilterHandler = (filteredYearData: any) => {
    setFilterYear(filteredYearData);
  };
  const filterArrayAsPerYear = (info: any) => {
    // return year==filterYear
    return info.date.getFullYear() == filterYear;
  };
  const filteredExpenseItems = dataFromAPI.filter(filterArrayAsPerYear);

  return (
    <Card className="w-full p-24 flex flex-col gap-2">
      <NewExpense onSaveExpenses={onSaveHandler} />
      <div className="bg-gray-800 p-4 rounded-xl">
        <ExpenseFilter onFilterYear={onFilterHandler} selected={filterYear} />
        <Chart dataPoints={filteredExpenseItems}/>
        <ExpenseList
          items={filteredExpenseItems}
          selected={filterYear}
          expenseInfo={expenses}
        />
      </div>
    </Card>
  );
}
