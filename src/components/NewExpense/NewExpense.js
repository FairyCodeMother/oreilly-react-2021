import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    // 2. Set up the State's parts: we only need true/false states to toggle.
    //     If we are NOT editing: show the button, else show the Form.
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const randomId = Math.ceil(Math.random() * 100).toString();
        // enriches the data
        const expenseData = {
            ...enteredExpenseData,
            id: randomId
        };
        props.onAddExpense(expenseData);
    };

    // 3. Create Handler to toggle the button: Button = true; Form submission = false.
    const startEditingHandler = () => {
        setIsEditing(true)
    };

    // ExpenseForm generates the data to be displayed.
    // 1. Add a button above ExpenseForm. Give it an empty onClick listener
    //    and add a useState to the react importer.
    // 4. Pass the Handler into the onClick listener, then wrap everything
    //    in a conditional so it's only visible if isEditing is false.
    // 5. Also wrap the Expense form in the inverse condition.
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
                />
            }
        </div>
    );
};

export default NewExpense;
