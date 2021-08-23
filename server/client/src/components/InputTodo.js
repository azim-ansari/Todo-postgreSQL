/** @format */

import React, { useState } from 'react';

const InputTodo = () => {
	const [description, setDescription] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			await fetch('http://localhost:5000/api/add-todo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			window.location = '/';
		} catch (error) {
			console.log('error:::', error);
		}
	};
	return (
		<div className='container' style={{ background: 'sky' }}>
			<form className='d-flex mt-5' onSubmit={submitHandler}>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
				<button className='btn btn-success col-md-3'>Add</button>
			</form>
		</div>
	);
};

export default InputTodo;
