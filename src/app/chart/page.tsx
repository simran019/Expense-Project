import ChartBar from "../chartbar/page";

const Chart = (props: any) => {
  const dataPoints = props.dataPoints;
  let totalAmount = 0;

  const barDataArray = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (var expense of dataPoints) {
    let amount = parseInt(expense.amount);
    let month = expense.date.getMonth();
    barDataArray[month].value += amount;
  }
  const dataPointValues=barDataArray.map((dp)=>dp.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="p-4 flex justify-between border-2 mb-4">
      {barDataArray.map((dataPoint: any) => {
        return (
          <ChartBar
            id={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
