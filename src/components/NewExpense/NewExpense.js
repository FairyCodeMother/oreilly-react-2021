//
// Object that renders the form portion of the App allowing the User to submit new ExpenseItems.
//

import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const randomId = Math.ceil(Math.random() * 100).toString();
        const expenseData = {
            ...enteredExpenseData,
            id: randomId
        };
        props.onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    };

    const stopEditingHandler = () => {
        setIsEditing(false)
    };

    return (
        <div className='new-expense'>
            {!isEditing &&
                <button onClick={startEditingHandler}>
                    Add New Expense
                </button>
            }
            {isEditing &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    );
};

export default NewExpense;
