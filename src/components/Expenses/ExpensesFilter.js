import React from 'react';

import './ExpensesFilter.css';

// We need to be able to listen to changes from the ExpensesFilter's dropdown.
const ExpensesFilter = (props) => {

	// OnChange serves us events.
	const dropdownHandler = (event) => {
		console.log('Event value: ',event.target.value);
		props.onFilterChange(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label className="expenses-filter label">
					Filter by Year
				</label>
				{/* Add a listener to the SELECT and point it to a handler. */}
				<select onChange={dropdownHandler}>
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
