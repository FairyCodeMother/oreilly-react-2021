import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';  // Generates State data via ExpenseForm on submit
import Expenses from './components/Expenses/Expenses';        // Uses State data

const App = () => {
  // Goal: To get this data into the Expenses component to display it as a State
  // Use NewExpense to convert the data into State.
  // Use Expenses to display the State.
  const expenses = [
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

  // 3d. Create the new Handler to accept the passed-up expenseData
  // 1. Create a Handler that takes in the expenses. This is where it will end up.
  const addExpenseHandler = (expense) => {
    // 3e. Do stuff with it.
    console.log("In App");
    // 4e. Where it's used.
    console.log(expense);
  };

  // 2g. NewExpense passes UP the enriched data, to be fed into a Handler
  // 2. Add a listener to NewExpense and assign it to addExpenseHandler. To NewExpense....
  return (
      <div>
        {/*// 3a. Assign a new onAddExpense prop to the child and assign addExpenseHandler to it.*/}
        {/*       Update NewExpense to accept props.*/}
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
  );
}

export default App;
