import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // 7. The data from ExpenseForm gets enriched.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // enriches the data
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    // 3. We are now taking in props.onAddExpense()/App.addExpenseHandler().
    //    Pass in the enriched expenseData.
    //    But where is that data coming from?
    // 8. Execute pointer to App.addExpenseHandler with the expenseData.
    props.onAddExpense(expenseData);
  };

  // ExpenseForm generates the data.
  return (
    <div className='new-expense'>
      <ExpenseForm
          // 4. Add a listener to ExpenseForm and point it to saveExpenseDataHandler.
          onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
