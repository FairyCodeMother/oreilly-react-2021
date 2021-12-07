//
// Object that allows the User to filter the Expenses displayed by year.
//

import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropdownHandler = (event) => {
        props.onFilterChange(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label className="expenses-filter label">
                    Filter by Year
                </label>
                <select
                    value={props.selectedYear}
                    onChange={dropdownHandler}
                >
                    <option value='all'>All Years</option>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
