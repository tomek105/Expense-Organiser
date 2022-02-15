import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //tablica wartości 'value' miesięcy z chartDataPoints, 12 wartosci
  const totalMaximum = Math.max(...dataPointValues); //zwraca maksymalna wartosc z tablicy wartosci 
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => ( //mapujemy na tablicy obiektów(miesięcy) tworząc dla każdego miesiąca słupek wykresu z dynamicznie nadawana wartoscia
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
