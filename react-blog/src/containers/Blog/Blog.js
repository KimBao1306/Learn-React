import React from 'react';
import PropTypes from 'prop-types';

import BlogCard from '../../components/BlogCard/BlogCard';
import Pagina from '../../components/Pagination/Pagination';

import {Container, Row} from 'reactstrap';

export default function Blog(props) {
	const {heading, blogs, pagina, changePage} = props;

	return (
		<Container>
			<h3 className="text-center mb-3">{heading}</h3>
			<Row>
				{blogs.map((bl) => (
					<BlogCard {...bl} key={bl.id} />
				))}
			</Row>
			{props.isShowPagina && <Pagina changePage={changePage} pagina={pagina} />}
		</Container>
	);
}

Blog.propTypes = {
	heading: PropTypes.string,
	blogs: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
			desc: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
			img: PropTypes.string.isRequired,
		})
	).isRequired,
	changePage: PropTypes.func,
	pagina: PropTypes.shape({
		page: PropTypes.number,
		totalPages: PropTypes.number,
	}),
};

Blog.defaultProps = {
	heading: 'Home',
	changePage: () => {},
	pagina: {
		page: 1,
		totalPages: 1,
	},
};
