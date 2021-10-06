import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNewHobby, setActiveHobby} from '../actions/hobby';

import HobbyList from '../components/Home/HobbyList';

function randomIdHobby() {
	return Math.trunc(1000 + Math.random() * 9000);
}

function HomePage() {
	const hobbyList = useSelector((state) => state.hobby.list);
	const activeId = useSelector((state) => state.hobby.activeId);

	const dispatch = useDispatch();

	const handleRandomHobby = () => {
		//create new hobby
		const newIdHobby = randomIdHobby();

		const newHobby = {
			id: newIdHobby,
			title: `Hobby ${newIdHobby}`,
		};
		//create action then send it to reducer
		const actionHobby = addNewHobby(newHobby);

		dispatch(actionHobby);
	};

	const handleHobbyActive = (hobby) => {
		const actionHobby = setActiveHobby(hobby);
		dispatch(actionHobby);
	};

	return (
		<div className="home-page">
			<h1>REDUX HOOKS - Home Page</h1>

			<button onClick={handleRandomHobby}>Random Hobby</button>
			<HobbyList
				hobbyList={hobbyList}
				activeId={activeId}
				handleHobbyActive={handleHobbyActive}
			/>
		</div>
	);
}

export default HomePage;
