"use client";

import {useId} from "react";

import Card from "./card/page";
import ExpenseItem from "./expenseItem/page";
import NewExpense from "./newExpense/page";

import Image from "next/image";

export default function Home() {
  const dataFromAPI = [
    {
      id: "e1",
      title: "Grocery",
      amount: "250",
      date: new Date(2023, 8, 23),
    },
    {
      id: "e2",
      title: "Shopping",
      amount: "150",
      date: new Date(2023, 7, 21),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: "250",
      date: new Date(2023, 6, 28),
    },
    {
      id: "e4",
      title: "Health Insurance",
      amount: "250",
      date: new Date(2023, 6, 15),
    },
  ];
  const onSaveHandler=(expenseData:any)=>{
    
    const finalExpenseData={
      ...expenseData,
      id:Math.random()
    }
    console.log(finalExpenseData)
  }
  return (
    <Card className="w-full p-24 flex flex-col gap-2">
      <NewExpense onSaveExpenses={onSaveHandler}/>
      {dataFromAPI.map((item, index) => {
        return <ExpenseItem key={item?.id} expenseInfo={item} />;
      })}
    </Card>
  );
}
