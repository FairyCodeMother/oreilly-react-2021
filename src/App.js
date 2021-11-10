import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  // 1a. We want to get this data into the Expenses component to display it.
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
  const addExpenseHandler = (expense) => {
    // 3e. Do stuff with it.
    console.log("In App");
    // 4e. Where it's used.
    console.log(expense);
  };

  // 2g. NewExpense passes UP the enriched data, to be fed into a Handler
  return (
      <div>
        {/*// 1b. But we need to turn it into handle-able data by turning it into a State.*/}
        {/*// 1c. NewExpense is where data is set as State so we go into NewExpense...*/}
        {/*// 3a. Assign a new onAddExpense prop to the child and assign addExpenseHandler to it.*/}
        {/*       Update NewExpense to accept props.*/}
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses} />
      </div>
  );
}

export default App;
