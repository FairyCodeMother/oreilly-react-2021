import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

// ExpensesList is getting kinda complicated.
// Let's put the List portion in its own Component.

// 1. Make new ExpensesList Component...
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // 3. We will have to pass filteredExpenses as a prop for ExpensesList.
    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            <ExpensesList
                expenses={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses;
