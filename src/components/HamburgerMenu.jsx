import React from 'react';
import './HamburgerMenu.css';
const HamburgerMenu = () => {

	return(
		<nav role="navigation" className="hamburger-content">
			<h2 role="link">Home</h2>
			<h2 role="link">Battle</h2>
			<h2 role="link">Statistics</h2>
			<h2 role="link">Add your hamster</h2>
		</nav>
	)
}

export default HamburgerMenu;