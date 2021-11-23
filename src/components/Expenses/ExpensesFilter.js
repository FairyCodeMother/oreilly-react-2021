import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

	// OnChange serves us events.
	const dropdownHandler = (event) => {
		props.onFilterChange(event.target.value);
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label className="expenses-filter label">
					Filter by Year
				</label>
				{/* Add a listener to the SELECT and point it to a Handler. */}
				<select
					value={props.selectedYear}
					onChange={dropdownHandler}
				>
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
