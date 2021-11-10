import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

// 3b. Add props to be passed in so we can use App.addExpenseHandler().
// 3. We are now taking in props from App: pass it into NewExpense.
const NewExpense = (props) => {

  // 4. Make a function that enriches the prop that's passed in...
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // 5. And then passes it up to App.addExpenseHandler.
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm
          // 5. Add a listener to ExpenseForm and assign it to saveExpenseDataHandler.
          onSaveExpenseData=
              // Now hitting submit will
              // 1f. assign the enriching function to the prop onSaveExpenseData
              // (now we can use it in ExpenseForm...)
              // 2c. expenseData gets passed into saveExpenseDataHandler.
              {saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
