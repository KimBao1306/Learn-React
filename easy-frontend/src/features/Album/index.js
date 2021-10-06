import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
	const match = useRouteMatch();

	return (
		<>
			<Switch>
				<Route
					path={`${match.path}`}
					component={() => <>Album Feature</>}
					exact
				/>
				<Route component={() => <div>Not Found</div>} />
			</Switch>
		</>
	);
}

export default AlbumFeature;
