
import Card from "../card/page";

function ExpenseDate(props: any) {
  // console.log(props.dateInfo.getDate())
  const date = props.dateInfo.getDate();
  const month = props.dateInfo.toLocaleString("en-US", {
    month: "long",
  });
  const year = props.dateInfo.getFullYear();
  const day = props.dateInfo.toLocaleString("en-US", {
    weekday: "long",
  });
  return (
    <Card className="border border-white border-2 bg-slate-950 w-36 p-6 text-center">
      <div className="font-bold">{month}</div>
      <div className="text-sm">{year}</div>
      <div className="font-extrabold text-3xl">{date}</div>
    </Card>
  );
}

export default ExpenseDate;
