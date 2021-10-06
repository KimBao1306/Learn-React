import React from 'react';
import {useParams} from 'react-router';

TodoDetail.propTypes = {};

function TodoDetail(props) {
	const params = useParams();
	return (
		<div>
			<p>Todo Detail: {params.id}</p>
		</div>
	);
}

export default TodoDetail;
