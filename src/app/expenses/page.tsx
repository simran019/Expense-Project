"use client";

import Card from "../card/page";
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
    <Card className="w-full border">
      {dataFromAPI.map((item, index) => {
        return <ExpenseItem key={item?.id} expenseInfo={item} />;
      })}
    </Card>
  );
}

export default Expenses;
