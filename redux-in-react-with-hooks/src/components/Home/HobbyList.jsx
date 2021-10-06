import PropTypes from 'prop-types';
import React from 'react';
import './HobbyList.css';

HobbyList.propTypes = {
	hobbyList: PropTypes.array,
	activeId: PropTypes.number,
	handleHobbyActive: PropTypes.func,
};

HobbyList.defaultProps = {
	hobbyList: [],
	activeId: 0,
	handleHobbyActive: null,
};

function HobbyList(props) {
	const {hobbyList, handleHobbyActive, activeId} = props;

	const checkHobbyActiveClick = (hobby) => {
		if (!handleHobbyActive) return;
		handleHobbyActive(hobby);
	};

	return (
		<ul>
			{hobbyList.map((hb) => (
				<li
					className={activeId === hb.id ? 'active' : ''}
					key={hb.id}
					onClick={() => checkHobbyActiveClick(hb)}
				>
					{hb.title}
				</li>
			))}
		</ul>
	);
}

export default HobbyList;
