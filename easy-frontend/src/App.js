import productApi from 'api/productApi';
import Footer from 'components/Footer';
import Header from 'components/Header';
import AlbumFeature from 'features/Album';
import CounterFeature from 'features/Counter';
import Home from 'features/Home';
import TodoFeature from 'features/Todo';
import React from 'react';
import {useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.css';
/**
 * Luồng đi của các route
 * từ App => gọi đến route bên trong Features => features sẽ gọi đến các Route nội bộ
 */

//lazy load for components - gọi đến file chính của features

function App(props) {
	// useEffect(() => {
	// 	const getProduct = async () => {
	// 		const params = {
	// 			_limit: 20,
	// 		};
	// 		const data = await productApi.getAll(params);
	// 		console.log(data);
	// 	};
	// 	getProduct();
	// }, []);
	return (
		<>
			<Header />
			<div className="main">
				<div style={{margin: '50px'}}>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/counter" component={CounterFeature} />
						<Route path="/todo" component={TodoFeature} />
						<Route path="/album" component={AlbumFeature} />
						<Route component={() => <div>Not Found</div>} />
					</Switch>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
