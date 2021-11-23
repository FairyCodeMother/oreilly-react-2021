import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

// We want to be able to filter the Expenses by filteredYear...
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    // 1. We get all the Expense items in props.items so we only
    //    need to restrict which are shown via a new function.
    const filteredExpenses = props.items.filter(expense => {
        // 2. We ensure it comes back as a String and then compare
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // 3. Alternately, we can move the conditional up here.
    let expensesContent = <p> No Expenses Found. </p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    }

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {expensesContent}
        </Card>
    );
}

export default Expenses;
