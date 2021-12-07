//
// Object that renders the expenses display portion of the App.
//

import React, { useState } from 'react';

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('all');

    const filterChangeHandler = (filteredYear) => {
        setFilteredYear(filteredYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        if (filteredYear === 'all') {
            return true;
        } else {
            return expense.date.getFullYear().toString() === filteredYear;
        }
    });

    // 10. Add the ExpensesChart (between Filter and List) and
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
                expenseItems={filteredExpenses}
            />
        </Card>
    );
}

export default Expenses;
