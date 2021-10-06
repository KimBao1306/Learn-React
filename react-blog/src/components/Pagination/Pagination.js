import React from 'react';
import PropTypes from 'prop-types';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const Pagina = (props) => {
	const {pagina, changePage} = props;
	const {page, totalPages} = pagina;

	return (
		<Pagination
			className="d-flex justify-content-center"
			aria-label="Page navigation example"
		>
			<PaginationItem disabled={page <= 1}>
				<PaginationLink previous href="#" onClick={() => changePage(page - 1)}>
					Previous
				</PaginationLink>
			</PaginationItem>
			<PaginationItem disabled={page >= totalPages}>
				<PaginationLink next href="#" onClick={() => changePage(page + 1)}>
					Next
				</PaginationLink>
			</PaginationItem>
		</Pagination>
	);
};

Pagina.propTypes = {
	pagina: PropTypes.shape({
		page: PropTypes.number.isRequired,
		totalPages: PropTypes.number.isRequired,
	}).isRequired,
	changePage: PropTypes.func.isRequired,
};

export default Pagina;
