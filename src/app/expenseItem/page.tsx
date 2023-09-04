"use client";

function ExpenseItem(props: any) {
  const date = props.expenseInfo.date.getDate();
  const month = props.expenseInfo.date.toLocaleString("en-US", {
    month: "long",
  });
  const year = props.expenseInfo.date.getFullYear();
  const day = props.expenseInfo.date.toLocaleString("en-US", {
    weekday: "long",
  });
  const title = props.expenseInfo.title;
  const amount = props.expenseInfo.amount;
  return (
    <div className="flex space-x-6 items-center justify-between bg-slate-800 w-full mb-6 p-4 text-center rounded-xl">
      <div className="border border-white border-2 bg-green-600 w-36 p-6 rounded-xl text-center">
        <div className="font-bold">{month}</div>
        <div className="text-sm">{year}</div>
        <div className="font-extrabold text-3xl">{date}</div>
      </div>
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
