import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  //Przekazana po props maksymalna wartosc z dataPoint parsowana jest na kod CSS, aby wypełnić słupek jakimś procentem wypełnienia obiektu. Styl nadajemy inline'owo.
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
