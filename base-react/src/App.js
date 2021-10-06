import Loading from 'components/Loading';
import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/**
 * Luồng đi của các route
 * từ App => gọi đến route bên trong Features => features sẽ gọi đến các Route nội bộ
 */

//lazy load for components - gọi đến file chính của features
const Component = React.lazy(() => import('./features/user/index'));

function App(props) {
	return (
		//add loading animation when components loading
		<Suspense fallback={() => <div>Loading</div>}>
			<Router>
				<Switch>
					<Route path="/user" component={() => <Component />} />

					<Route component={() => <div>Not Found</div>} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
