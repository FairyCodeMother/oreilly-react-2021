//
// Object that passes data into ChartBar and displays the result.
//
import React from 'react';

import ChartBar from "./ChartBar";
import './Chart.css';

// 3. Create a Container that feeds each dataPoint into ChartBar to
//    display all monthly expenses.
const Chart = (props) => {
    // 9. Make an array from all the values in this collection.
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // 10. Get the largest value from the array top be the max height of the Chart.
    const totalMaximum = Math.max(...dataPointValues);

    console.log('GINASAURUS: Chart: dataPointValues: ');
    console.log(dataPointValues);

    // 11. And set maxValue to the totalMaximum.
    return (
        <div className='chart'>
            {props.dataPoints.map( (dataPoint) => (
                <ChartBar
                    key={ dataPoint.label }
                    value={ dataPoint.value }
                    maxValue={ totalMaximum }
                    label={ dataPoint.label }
                />
            ))}
        </div>
    )
}

export default Chart;
