"use client";

import { useState } from "react";
import Card from "../card/page";

const NewExpense = (props:any) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const inputHandler = (identifier: string, value: any) => {
    if (identifier === "title") {
      setUserInput((prevState) => {
        return { ...prevState, enteredTitle: value };
      });
    } else if (identifier === "amount") {
      setUserInput((prevState) => {
        return { ...prevState, enteredAmount: value };
      });
    } else {
      setUserInput((prevState) => {
        return { ...prevState, enteredDate: value };
      });
    }
  };

  const submitHandler = () => {
    const expenseData={
      title:userInput.enteredTitle,
      amount:userInput.enteredAmount,
      date:userInput.enteredDate
    }
    // console.log(expenseData)
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });

    props.onSaveExpenses(expenseData)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="bg-fuchsia-500 border-2 border-white rounded-xl flex flex-col h-fit p-4 gap-4 text-black items-center text-xl font-bold">
        <div className="flex justify-between gap-4 w-1/2 p-4 ">
          <div className="flex flex-col">
            <label>Title</label>
            <input
              type="text"
              className="rounded-md p-2 w-60"
              value={userInput.enteredTitle}
              onChange={(event) => inputHandler("title", event.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label>Amount</label>
            <input
              type="number"
              min="0.00"
              className="rounded-md p-2 w-60"
              value={userInput.enteredAmount}
              onChange={(event) => inputHandler("amount", event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-between gap-4 p-4 w-1/2">
          <div className="flex flex-col">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2024-01-31"
              className="rounded-md p-2 w-60"
              value={userInput.enteredDate}
              onChange={(event) => inputHandler("date", event.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 p-4  w-1/2">
          <div
            className="bg-purple-950 text-center p-2 rounded-md text-white self-center cursor-pointer hover:bg-purple-900"
            onClick={submitHandler}
          >
            Add Expense
          </div>
        </div>
      </div>
    </form>
  );
};

export default NewExpense;
