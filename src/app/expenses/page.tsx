"use client";

import ExpenseItem from "../expenseItem/page";

function Expenses() {
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
  return (
    <div className="w-full border p-2">
      {dataFromAPI.map((item, index) => {
        return <ExpenseItem key={item?.id} expenseInfo={item} />;
      })}
    </div>
  );
}

export default Expenses;
