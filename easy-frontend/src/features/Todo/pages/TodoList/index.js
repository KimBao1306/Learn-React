import Form from 'features/Todo/components/Form/Form';
import List from 'features/Todo/components/List';
import React, {useState} from 'react';

function TodoList() {
	const initList = [
		{id: 1, title: 'Todo 1', done: false},
		{id: 2, title: 'Todo 2', done: false},
		{id: 3, title: 'Todo 3', done: false},
		{id: 4, title: 'Todo 4', done: false},
	];

	const [todoList, setTodoList] = useState(initList);
	// TOGGLE STATUS TODO
	const toggleTodo = (obj, idx) => {
		const newTodoList = [...todoList];
		const newObj = {
			...obj,
			done: !obj.done,
		};
		newTodoList[idx] = newObj;
		setTodoList(newTodoList);
	};
	// SUBMIT TODO FORM
	const submitForm = (data) => {
		const newObj = {
			id: todoList.length + 1,
			title: data.title,
			done: false,
		};
		const newTodoList = [...todoList, newObj];
		setTodoList(newTodoList);
	};
	return (
		<div>
			<p>this is a TodoList</p>
			<Form handleSubmitForm={submitForm} />
			<List todoList={todoList} handleTodoClick={toggleTodo} />
		</div>
	);
}

export default TodoList;
