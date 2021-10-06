import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.css';

Pagination.propTypes = {
	pagination: PropTypes.object.isRequired,
	handlePageChange: PropTypes.func,
};

Pagination.defaultProps = {
	handlePageChange: null,
};

function Pagination(props) {
	const {pagination, handlePageChange} = props;
	const {_page, _limit, _totalRows} = pagination;
	const totalPage = Math.ceil(_totalRows / _limit);

	function checkPageChange(newPage) {
		if (handlePageChange) {
			handlePageChange(newPage);
		}
	}

	return (
		<div className="pagination">
			<button
				disabled={_page === 1 ? true : false}
				onClick={() => checkPageChange(_page - 1)}
			>
				Previous
			</button>
			<button
				disabled={_page === totalPage ? true : false}
				onClick={() => checkPageChange(_page + 1)}
			>
				Next
			</button>
		</div>
	);
}

export default Pagination;
