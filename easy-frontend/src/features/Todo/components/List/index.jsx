import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import './List.scss';

List.propTypes = {
	todoList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			done: PropTypes.bool.isRequired,
		})
	),
	handleTodoClick: PropTypes.func,
};

List.defaultProps = {
	todoList: [],
	handleTodoClick: null,
};

function List(props) {
	const {todoList, handleTodoClick} = props;

	const checkHandleTodoClick = (obj, idx) => {
		if (!handleTodoClick) {
			return;
		}
		handleTodoClick(obj, idx);
	};
	return (
		<div>
			<ul>
				{todoList.map((i, idx) => (
					<li
						key={i.id}
						className={cls({'todo-done': i.done})}
						onClick={() => checkHandleTodoClick(i, idx)}
					>
						{i.title}
					</li>
				))}
			</ul>
		</div>
	);
}

export default List;
