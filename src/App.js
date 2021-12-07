//
// Task: Add a  Bar Chart.
//

import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_VALUES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 14.12,
        date: new Date(2019, 7, 14),
    },
    { id: 'e2',
        title: 'New TV',
        amount: 149.49,
        date: new Date(2019, 1, 12) },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 124.67,
        date: new Date(2020, 2, 28),
    },
    {
        id: 'e4',
        title: 'Desk (Wooden)',
        amount: 120.24,
        date: new Date(2021, 5, 12),
    },
    {
        id: 'e5',
        title: 'New Cat',
        amount: 50.17,
        date: new Date(2022, 3, 14),
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_VALUES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
