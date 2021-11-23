import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

// To improve performance and robustness, tell React WHERE to add a new item.
// Go to where we output each ExpenseItem...
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {props.items.map(expense =>
                <ExpenseItem
                    // Keys are used by React to identify specific Component instances.
                    // Each Expense has a unique id that can be used as the ExpenseItem key
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </Card>
    );
}

export default Expenses;
