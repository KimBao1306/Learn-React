import React, {useState} from 'react';
import './ColorBox.css';

const COLOR_LIST = ['deeppink', 'green', 'yellow', 'black', 'blue'];

function getRandomColor() {
	return COLOR_LIST[Math.trunc(Math.random() * 5)];
}

function ColorBox() {
	const [color, setColor] = useState(() => {
		const initColor = localStorage.getItem('box-color') || 'deeppink';
		return initColor;
	});

	function handleBox() {
		const newColor = getRandomColor();
		setColor(newColor);
		localStorage.setItem('box-color', newColor);
	}

	return (
		<div
			className="box"
			style={{backgroundColor: color}}
			onClick={handleBox}
		></div>
	);
}

export default ColorBox;
