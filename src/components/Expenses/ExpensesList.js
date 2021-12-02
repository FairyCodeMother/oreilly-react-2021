import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

// 2. Move over the code that defines and returns the ExpensesList
const ExpensesList = (props) => {
    // 4. Then use the prop we pass in, instead of filteredExpenses.
    // 6. Finally: handle the case when there are no Expenses to display.
    if (props.expenses.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
                Found no Expenses.
            </h2>
        );
    }

    // 5. Return the ExpensesList as an unordered list by moving the mapping logic.
    return (
        // 7. Since we are returning an UL item, we need to update ExpenseItem to be a list item.
        <ul className={"expenses-list"}>
            {props.expenses.map((expense) =>
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </ul>
    );
}

export default ExpensesList;
