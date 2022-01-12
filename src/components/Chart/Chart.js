import './Chart.css';
import ChartBar from './ChartBar.js'
const Chart = (props) => {
    return ( 
        <div className="chart">
            {props.dataPoint.map(dataPoint =>{
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                />
            })}
            
        </div>
     );
}

export default Chart;