import Card from "../card/page";

const NewExpense = () => {
  return (
    <div className="bg-fuchsia-500 border-2 border-white rounded-xl flex flex-col h-fit p-4 gap-4 text-black items-center text-xl font-bold">
      <div className="flex justify-between gap-4 w-1/2 p-4">
        <div className="flex flex-col">
          <label>Title</label>
          <input type="text" className="rounded-md p-2 w-60" />
        </div>
        <div className="flex flex-col">
          <label>Amount</label>
          <input type="number" min="0.00" className="rounded-md p-2 w-60" />
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
          />
        </div>
      </div>
      <div className="flex justify-end gap-4 p-4  w-1/2">
        <div className="bg-purple-950 text-center p-2 rounded-md text-white self-center">
          Add Expense
        </div>
      </div>
    </div>
  );
};

export default NewExpense;
