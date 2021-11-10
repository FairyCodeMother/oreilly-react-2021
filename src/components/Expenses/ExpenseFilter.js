import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = () => {
	return (
		<div>
			<label>Year Filter</label>
			<select>
				<option>2019</option>
				<option>2020</option>
				<option>2021</option>
				<option>2022</option>
			</select>
		</div>
	);
};

export default ExpenseFilter;
