import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// 3b. Add props to be passed in.
const NewExpense = (props) => {

  // 1e. Make a function that enriches the prop that's passed in...
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // 4c. Where it gets enriched...
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // 3c. Execute prop App.addExpenseHandler(expenseData) to move data into Parent App.
    // 4d. And passed into App.addExpenseHandler().
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
       {/*4a. Now when something is submitted in ExpenseForm...*/}
      <ExpenseForm
          // 1d. Add a listener that will be triggered when the form is submitted.
          onSaveExpenseData=
              // 1f. assign the enriching function to the prop onSaveExpenseData
              // (now we can use it in ExpenseForm...)
              // 2c. expenseData gets passed into saveExpenseDataHandler.
              {saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
