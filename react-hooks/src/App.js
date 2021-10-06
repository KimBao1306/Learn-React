import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import Clock from './components/Clock';
import MagicColorBox from './components/MagicColorBox';
function App() {
	const [todoList, setTodoList] = useState([
		{id: 1, title: 'I love Easy Frontend! 😍 '},
		{id: 2, title: 'We love Easy Frontend! 🥰 '},
		{id: 3, title: 'They love Easy Frontend! 🚀 '},
	]);
	const [postList, setPostList] = useState([]);
	const [pagination, setPagination] = useState({
		_page: 1,
		_limit: 10,
		_totalRows: 10,
	});
	const [filters, setFilters] = useState({
		_page: 1,
		_limit: 10,
	});
	useEffect(() => {
		async function fetchPostList() {
			try {
				const query = queryString.stringify(filters);
				const res = await fetch(
					`http://js-post-api.herokuapp.com/api/posts?${query}`
				);
				const resJson = await res.json();
				const {data, pagination} = resJson;
				setPostList(data);
				setPagination(pagination);
			} catch (error) {
				console.log('Failed to fetch: ', error.message);
			}
		}

		fetchPostList();
	}, [filters]);

	function handleRemoveItem(index) {
		const newTodos = [...todoList];
		newTodos.splice(index, 1);
		setTodoList(newTodos);
	}

	function handleAddItem(valuesForm) {
		//spread values nhận được từ component Form sau đó tạo obj mới.
		const newItem = {
			id: todoList.length + 1,
			...valuesForm,
		};
		const newTodos = [...todoList, newItem];

		setTodoList(newTodos);
	}

	function handlePageChange(newPage) {
		setFilters({
			...filters,
			_page: newPage,
		});
	}

	function handleSearchForm(valuesFiltersForm) {
		setFilters({
			...filters,
			_page: 1,
			title_like: valuesFiltersForm.searchTerm,
		});
	}
	return (
		<div className="app">
			<TodoForm handleAddItem={handleAddItem} />
			<TodoList todos={todoList} handleRemoveItem={handleRemoveItem} />
			<PostFiltersForm submitForm={handleSearchForm} />
			<PostList posts={postList} />
			<Pagination pagination={pagination} handlePageChange={handlePageChange} />
			<Clock />
			<MagicColorBox />
		</div>
	);
}

export default App;
