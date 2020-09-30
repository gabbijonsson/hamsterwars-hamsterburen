import React from 'react';
import './HamburgerMenu.css';
import {Link} from 'react-router-dom';
const HamburgerMenu = () => {

	return (
		<nav role="navigation" className="hamburger-content">
			<Link to="/">
				<h2 role="link">Home</h2>
			</Link>
			<Link to="/battle">
				<h2 role="link">Battle</h2>
			</Link>
			<Link to="/stats">
				<h2 role="link">Statistics</h2>
			</Link>
			<Link to="/upload">
				<h2 role="link">Create hamster</h2>
			</Link>
		</nav>
	);
}

export default HamburgerMenu;