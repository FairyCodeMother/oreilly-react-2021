//
// Object that renders the expenses display portion of the App.
//

import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // 10. Add the ExpensesChart, between the Filter and List, and
    //     pass in the filteredExpenses.
    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            <ExpensesChart
                expenses={filteredExpenses}
            />
            <ExpensesList
                expenses={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses;
