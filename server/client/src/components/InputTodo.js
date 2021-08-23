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
			<h1 className='box'>PERN Todo App</h1>
			<div className='border'>
				<form className='box d-flex m-2' onSubmit={submitHandler}>
					<input
						type='text'
						className='form-control col-ml-5'
						placeholder='e.g: task'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
					<button className='btn btn-dark col-5'>Add</button>
				</form>
			</div>
		</div>
	);
};

export default InputTodo;
