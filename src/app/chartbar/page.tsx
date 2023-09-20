const ChartBar = (props: any) => {
  let barFillHeight = 0;
  if (props.maxValue > 0) {
    barFillHeight = (props.value / props.maxValue) * 100;
  }
  return (
    <div
      key={props.id}
      className="text-center flex flex-col items-center gap-2"
    >
      <div className="w-4 border border-2 rounded-xl h-32 flex items-end">
        <div
          className="bg-white w-4 border-2 rounded-b-xl "
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="text-center">{props.label}</div>
      <div className="text-center">{props.value}</div>
    </div>
  );
};

export default ChartBar;
