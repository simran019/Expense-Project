"use client";

import { useState } from "react";
import Card from "../card/page";

const NewExpense = (props: any) => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const inputHandler = (identifier: string, value: any) => {
    if (identifier === "title") {
      setEnteredTitle(value);
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredTitle: value };
      // });
    } else if (identifier === "amount") {
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredAmount: value };
      // });
      setEnteredAmount(value);
    } else {
      // setUserInput((prevState) => {
      //   return { ...prevState, enteredDate: value };
      // });
      setEnteredDate(value);
    }
  };

  const submitHandler = () => {
    setIsSubmit(true);
    if (enteredTitle !== "" && enteredAmount !== "" && enteredDate !== "") {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      console.log(expenseData);
      props.onSaveExpenses(expenseData);
      alert("Expense added");
    } else {
      alert("Form couldnot be submitted");
    }

    // setUserInput({
    //   enteredTitle: "",
    //   enteredAmount: "",
    //   enteredDate: "",
    // });
  };
  const clearInputBox = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return showForm ? (
    <form onSubmit={submitHandler}>
      <div className="bg-slate-800 border-2 border-white rounded-xl flex flex-col h-fit p-4 gap-4 text-white items-center text-xl font-bold">
        <div className="flex justify-between gap-4 w-1/2 p-4 ">
          <div className="flex flex-col gap-2">
            <label>Title</label>
            <input
              type="text"
              className="rounded-md p-2 w-60 text-black"
              // value={userInput.enteredTitle}
              value={enteredTitle}
              onChange={(event) => inputHandler("title", event.target.value)}
            />
            <span className="text-red-600 font-light text-md">
              {enteredTitle.trim().length === 0 && isSubmit
                ? "* Enter Title"
                : ""}
            </span>
          </div>
          <div className="flex flex-col">
            <label>Amount</label>
            <input
              type="number"
              min="0.00"
              className="rounded-md p-2 w-60 text-black"
              // value={userInput.enteredAmount}
              value={enteredAmount}
              onChange={(event) => inputHandler("amount", event.target.value)}
            />
            <span className="text-red-600 font-light text-md">
              {enteredAmount.trim().length === 0 && isSubmit
                ? "* Enter Amount"
                : ""}
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-4 p-4 w-1/2">
          <div className="flex flex-col">
            <label>Date</label>
            <input
              type="date"
              min="2022-01-01"
              max="2024-01-31"
              className="rounded-md p-2 w-60 text-black"
              // value={userInput.enteredDate}
              value={enteredDate}
              onChange={(event) => inputHandler("date", event.target.value)}
            />
            <span className="text-red-600 font-light text-md">
              {enteredDate.trim().length === 0 && isSubmit
                ? "* Enter Date"
                : ""}
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-4 p-4  w-1/2">
          <div
            className="bg-purple-950 border-2 border-white text-center p-2 rounded-md text-white self-center cursor-pointer hover:bg-purple-900"
            onClick={submitHandler}
          >
            Add Expense
          </div>
          <div
            className="bg-purple-950 text-center border-2 border-white p-2 rounded-md text-white self-center cursor-pointer hover:bg-purple-900"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </div>
          <div
            className="bg-purple-950 text-center border-2 border-white p-2 rounded-md text-white self-center cursor-pointer hover:bg-purple-900"
            onClick={clearInputBox}
          >
            Clear
          </div>
        </div>
      </div>
    </form>
  ) : (
    <div className="bg-slate-800 border-2 border-white rounded-xl flex flex-col h-fit p-4 gap-4 text-black items-center text-xl font-bold">
      <div
        className="w-fit border-white border-2 bg-purple-950 text-center p-2 rounded-md text-white self-center cursor-pointer hover:bg-purple-900"
        onClick={() => setShowForm(true)}
      >
        Add New Expense
      </div>
    </div>
  );
};

export default NewExpense;
