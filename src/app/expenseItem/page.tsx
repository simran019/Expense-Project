"use client";

import ExpenseDate from "../expenseDate/page";

function ExpenseItem(props: any) {
  const title = props.expenseInfo.title;
  const amount = props.expenseInfo.amount;
  return (
    <div className="flex space-x-6 items-center justify-between bg-slate-800 w-full mb-6 p-4 text-center rounded-xl">
      <ExpenseDate dateInfo={props.expenseInfo.date} />
      <div className="w-1/2 text-center font-bold text-3xl rounded-md">
        {title}
      </div>
      <div className="bg-purple-950 w-1/7 text-center font-bold text-3xl rounded-xl border border-2 border-white p-4">
        $ {amount}
      </div>
    </div>
  );
}

export default ExpenseItem;
