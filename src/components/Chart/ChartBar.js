//
// Object that represents the sum of a month's expenses.
//

// 2. Create an object to represent the sum of values for a month.
import React from 'react';

const ChartBar = (props) => {
    // 4. Each ChartBar will define the length of the bar on the value of the dataPoint.
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    // 5. And then use that value to define the ChartBar's height.
    return (
        <div className={"chart-bar"}>
            <div className={"chart-bar__inner"}>
                <div className={"chart-bar__fill"} style={{height: barFillHeight}}/>
            </div>
            <div className={"chart-bar__label"}>{props.label}</div>
        </div>
    )
}

export default ChartBar;
