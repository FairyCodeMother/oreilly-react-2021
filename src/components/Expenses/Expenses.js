import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

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
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )}
        </Card>
    );
}

export default Expenses;
