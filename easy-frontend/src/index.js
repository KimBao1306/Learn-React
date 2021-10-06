import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './app/store';
import {Provider} from 'react-redux';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={() => <div>Loading</div>}>
				<Router>
					<App />
				</Router>
			</Suspense>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
