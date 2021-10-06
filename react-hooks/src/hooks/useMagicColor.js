import {useEffect, useState, useRef} from 'react';

function getRandomColor(currentColor) {
	const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];

	const currentIndex = COLOR_LIST.indexOf(currentColor);
	let newIndex = currentIndex;

	while (newIndex === currentIndex) {
		newIndex = Math.trunc(Math.random() * 5);
	}

	console.log(COLOR_LIST[newIndex]);
	return COLOR_LIST[newIndex];
}

function useMagicColor() {
	const [color, setColor] = useState('transparent');
	const colorRef = useRef('transparent');

	useEffect(() => {
		const colorInterval = setInterval(() => {
			const newColor = getRandomColor(colorRef.current);

			setColor(newColor);

			colorRef.current = newColor;
		}, 1000);

		return () => {
			clearInterval(colorInterval);
		};
	}, []);

	return {color};
}

export default useMagicColor;
