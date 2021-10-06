import {useState, useEffect} from 'react';

function formatTimeString(time) {
	const h = `0${time.getHours()}`.slice(-2);
	const m = `0${time.getMinutes()}`.slice(-2);
	const s = `0${time.getSeconds()}`.slice(-2);
	return `${h}:${m}:${s}`;
}

function useClock() {
	const [timeString, setTimeString] = useState('');

	useEffect(() => {
		const timeInterval = setInterval(() => {
			const now = new Date();
			const timeFormated = formatTimeString(now);
			setTimeString(timeFormated);
		}, 1000);

		return () => {
			clearInterval(timeInterval);
		};
	}, []);

	return {timeString};
}

export default useClock;
