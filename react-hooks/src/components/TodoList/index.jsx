import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
	todos: PropTypes.array,
	handleRemoveItem: PropTypes.func,
};

TodoList.defaultProps = {
	todos: [],
	handleRemoveItem: null,
};

function TodoList(props) {
	const {todos, handleRemoveItem} = props;

	function checkRemoveFunc(index) {
		if (handleRemoveItem) {
			handleRemoveItem(index);
		}
	}

	return (
		<ul>
			{todos.map((item, index) => (
				<li key={item.id} onClick={() => checkRemoveFunc(index)}>
					{item.title}
				</li>
			))}
		</ul>
	);
}

export default TodoList;
