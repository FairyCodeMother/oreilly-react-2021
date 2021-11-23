import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';  // Generates State data via ExpenseForm on submit
import Expenses from './components/Expenses/Expenses';        // Uses State data

// Use State to add entries into the Expenses list
//
// 1. Extract the dummy values from App
const DUMMY_VALUES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // 2. Call useState and set the initial values to DUMMY_VALUES
  //    and then capture the expenses array and updater
  const [expenses, setExpenses] = useState(DUMMY_VALUES);

  // 3. We are taking in the expenses in the Handler
  //    so this is where we will use the state updater
  const addExpenseHandler = (expense) => {
    // 4. Since we are ADDING expenses to the TOP of the list
    //    we need to make a new array that has both the new expense
    //    and THEN the original expenses array. We get the previous
    //    state for free from React...
    setExpenses((prevExpenses) => {
      //  ... then return it in the new array
      return [expense, ...prevExpenses];    // spread operator (...) splits the array
    });
    // 5. React doesn't "see" what the values of each Expense is,
    //    only counts and sees one is added. This is slow performance
    //    and allows accidental overwriting. To fix go to Expenses.js.
  };

  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
  );
}

export default App;
