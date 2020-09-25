import React from 'react';
import './HamburgerMenu.css';
const HamburgerMenu = ({showHome, showBattle, showStats, showCreate}) => {

	return(
		<nav role="navigation" className="hamburger-content">
			<h2 role="link" onClick={showHome}>Home</h2>
			<h2 role="link" onClick={showBattle}>Battle</h2>
			<h2 role="link" onClick={showStats}>Statistics</h2>
			<h2 role="link" onClick={showCreate}>Add your hamster</h2>
		</nav>
	)
}

export default HamburgerMenu;