import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './containers/Header/Header';
import Blog from './containers/Blog/Blog';

import './App.css';

function App() {
	//blogs = state blogs - setBlogs = setState blogs
	const [blogs, setBlogs] = useState([]);
	const [pagina, setPagina] = useState({
		page: 1,
		totalPages: 1,
	});
	const [filters, setFilters] = useState({
		page: 1,
		totalPages: 1,
	});

	const fetchBlogs = async () => {
		const res = await fetch(
			`https://react-b26-blog-api.glitch.me/blogs?page=${filters.page}`
		);
		const blogs = await res.json();

		setBlogs(blogs.blogsByPage);
		setPagina(blogs.pagina);
	};

	useEffect(() => {
		fetchBlogs();
	}, [filters]);

	function changePage(newPage) {
		setFilters({
			...filters,
			page: newPage,
		});
	}

	return (
		<Router>
			<Header />

			<Route
				path="/"
				exact
				component={() => <Blog blogs={blogs} heading={'Home'} />}
			/>
			<Route
				path="/blogs"
				exact
				component={() => (
					<Blog
						blogs={blogs}
						heading={'Blogs'}
						isShowPagina={true}
						changePage={changePage}
						pagina={pagina}
					/>
				)}
			/>
			<Route
				path="/about"
				exact
				component={() => <h3 className="text-center mb-3">About me</h3>}
			/>
		</Router>
	);
}

export default App;
