import ChartBar from "./ChartBar";
import './Chart.css';

// 3. Create a Container that feeds each dataPoint into ChartBar to
//    display all monthly expenses.
const Chart = (props) => {
    // 9. Now that we have the dataPoints we can base the chart on the largest value by
    //    mapping all values into an array then using Math.max to get the largest one..
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = (Math.max(... dataPointValues));

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    max={totalMaximum}
                />
            ))}
        </div>
    )
}

export default Chart;
