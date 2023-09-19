import ExpenseItem from "../expenseItem/page";

const ExpenseList = (props: any) => {
  const expenseArray = props.items;
  let expenseContent = <p></p>;
  if (expenseArray.length == 0 && props.selected == "none") {
    expenseContent = props.expenseInfo.map((item: any) => {
      return <ExpenseItem key={item?.id} expenseInfo={item} />;
    });
  } else if (expenseArray.length > 0) {
    expenseContent = props.items.map((item: any) => {
      return <ExpenseItem key={item?.id} expenseInfo={item} />;
    });
  } else {
    expenseContent = <p className="text-center text-2xl">No items Found</p>;
  }
  return <div>{expenseContent}</div>;
};

export default ExpenseList;
