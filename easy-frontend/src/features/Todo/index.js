import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router';
import {Link} from 'react-router-dom';
import TodoDetail from './pages/TodoDetail';
import TodoList from './pages/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
	const match = useRouteMatch();

	return (
		<>
			<div>
				<Link to="/todo/list">Todo List</Link>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<Link to="/todo/13061998">Todo Detail</Link>
			</div>
			<Switch>
				<Route
					path={`${match.path}`}
					component={() => <>Todo Feature</>}
					exact
				/>
				<Route path={`${match.path}/list`} component={TodoList} />
				<Route path={`${match.path}/:id`} component={TodoDetail} />
				<Route component={() => <div>Not Found</div>} />
			</Switch>
		</>
	);
}

export default TodoFeature;
