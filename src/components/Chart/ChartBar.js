//
// Object that represents the sum of a month's expenses.
//

// 2. Create an object to represent the sum of values for a month.
import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
    // 4. Each ChartBar is the sum of all values from a given month.
    let barFillHeight = '0%';

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    // 5. Use inline styling to set that barFillHeight as the "height".
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={ { height: barFillHeight } }
                />
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}

export default ChartBar;
