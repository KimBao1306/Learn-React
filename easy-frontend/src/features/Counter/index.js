import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrease, increase} from './CounterSlide';
CounterFeature.propTypes = {};

function CounterFeature(props) {
	const counterState = useSelector((state) => state.counter);
	const dispatch = useDispatch();

	const handleIncreaseClick = () => {
		dispatch(increase());
	};
	const handleDecreaseClick = () => {
		dispatch(decrease());
	};
	return (
		<div>
			Counter: {counterState}
			<div>
				<button onClick={handleIncreaseClick}>Tăng</button>
			</div>
			<div>
				<button onClick={handleDecreaseClick}>Giảm</button>
			</div>
		</div>
	);
}

export default CounterFeature;
