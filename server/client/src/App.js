/** @format */

import './App.css';
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';
const App = () => {
	return (
		<>
			<div className='App'>
				<InputTodo />
				<ListTodo />
			</div>
		</>
	);
};

export default App;
