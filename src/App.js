import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';  // Generates State data via ExpenseForm on submit
import Expenses from './components/Expenses/Expenses';        // Uses State data

const App = () => {
  // Goal: To get this data into App to display as a State
  // Use ExpenseForm to generate the data then lift it into NewExpenses to turn it into a State that can be passed into Expenses.
  // Strategy:
  // 1. Pass expenses into NewExpenses to turn it into a usable data.
  // 2. Pass enriched data into ExpenseForm. When a submission is triggered the expense data is created by ExpenseForm and passed up to NewExpense.
  // 3. NewExpense enriches the data and passes it up into App, where it can be passed into Expenses.
  // // // Try starting at the end and working towards the front. // // //

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

  // 1. Create a Handler that will take in and use expenses. This is where it will end up.
  // 9. expenseData is used in App!
  const addExpenseHandler = (expense) => {
    console.log("In App");
    console.log(expense);
  };

  // 2. We need to pass the Handler down into the Child.
  //    Add a listener to NewExpense and assign it to our new Handler.
  //    To NewExpense....
  return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
  );
}

export default App;
