"use client";

import Card from "../card/page";
import ExpenseDate from "../expenseDate/page";

function ExpenseItem(props: any) {
  const title = props.expenseInfo.title;
  const amount = props.expenseInfo.amount;
  return (
    <Card className="flex border-2 rounded-xl border-white space-x-6 items-center justify-between bg-slate-800 w-full mb-6 p-4 text-center">
      <ExpenseDate dateInfo={props.expenseInfo.date} />
      <div className="w-1/2 text-center font-bold text-3xl">{title}</div>
      <div className="bg-purple-950 w-1/7 text-center font-bold text-3xl rounded-xl border border-2 border-white p-4">
        $ {amount}
      </div>
    </Card>
  );
}

export default ExpenseItem;
