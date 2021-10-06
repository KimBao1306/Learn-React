import React from 'react';
import {Navbar} from 'reactstrap';

import Logo from '../../components/Logo/Logo';
import MainMenu from '../../components/MainMenu/MainMenu';

const Header = () => {
	return (
		<Navbar className="py-4 mb-5" color="light" light expand="md">
			<Logo />
			<MainMenu />
		</Navbar>
	);
};

export default Header;
