import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './MagicColorBox.css';

function MagicColorBox() {
	const {color} = useMagicColor();

	return <div className="box" style={{backgroundColor: color}}></div>;
}

export default MagicColorBox;
