//
// Container to display ChartBars.
//

// 1. Create a container to display the Chart of Expenses.
import React from 'react';

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    // 6. Create an collection of objects with a value for each month.
    //    Note: Jan = 0 index.
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];

    // 7. Iterate through the object and start writing in the values for
    //    each month such that: month => value. Jan is in index 0.
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        console.log('GINASAURUS: Expenses: expenseMonth: ',expenseMonth);
        console.log('GINASAURUS: Expenses: amount: ',expense.amount);
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    console.log(chartDataPoints);

    // 8. Then pass the collection of dataPoints.
    return (
        <Chart
            dataPoints={chartDataPoints}
        />
    );
}

export default ExpensesChart;
