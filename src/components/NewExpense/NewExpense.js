import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const randomId = Math.ceil(Math.random() * 100).toString();
    // enriches the data
    const expenseData = {
      ...enteredExpenseData,
      id: randomId
    };
    props.onAddExpense(expenseData);
  };

  // ExpenseForm generates the data.
  return (
    <div className='new-expense'>
      <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
