import React, {useState} from 'react';
import {Collapse, Nav, NavItem, NavbarToggler} from 'reactstrap';
import {Link} from 'react-router-dom';

export default function MainMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<Link to="/" className="nav-link">
							Home
						</Link>
					</NavItem>
					<NavItem>
						<NavItem>
							<Link to="/blogs" className="nav-link">
								Blogs
							</Link>
						</NavItem>
					</NavItem>
					<NavItem>
						<Link to="/about" className="nav-link">
							Aboute me
						</Link>
					</NavItem>
				</Nav>
			</Collapse>
		</>
	);
}
