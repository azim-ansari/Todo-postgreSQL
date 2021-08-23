/** @format */

import React, { useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {
	const [todo, setTodo] = useState([]);

	const getTodo = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/all-todo');
			const jsonData = await response.json();
			setTodo(jsonData.data);
		} catch (error) {
			console.log('error:::', error);
		}
	};
	const deleteTodo = async (id) => {
		try {
			await fetch(`http://localhost:5000/api/delete-todo/${id}`, {
				method: 'DELETE',
			});
			setTodo(todo.filter((item) => item.todo_id !== id));
		} catch (error) {
			console.log('error:::', error);
		}
	};
	useEffect(() => {
		getTodo();
	}, []);
	return (
		<>
			{Object.keys(todo).length === 0 ? (
				<div>...loading</div>
			) : (
				// <span class='border-top-0'>
				<div className='container'>
					<div className='border'>
						<table class='table'>
							<thead>
								<tr className='container bg-dark'>
									<th>
										<h1 className='badge badge-primary'>todo_id</h1>
									</th>
									<th>
										<h1 className='badge badge-success'>Description</h1>
									</th>
									<th>
										<h1 className='badge badge-warning'>Edit</h1>
									</th>
									<th>
										<h1 className='badge badge-danger'>Delete</h1>
									</th>
								</tr>
							</thead>
							<tbody>
								{todo.map((item) => (
									<tr>
										<td>{item.todo_id}</td>
										<td>{item.description}</td>
										<td>
											<EditTodo todo={item} />
										</td>
										<td>
											<button className='btn btn-danger' onClick={() => deleteTodo(item.todo_id)}>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
};

export default ListTodo;
