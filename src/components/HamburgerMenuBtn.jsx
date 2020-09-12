import React from 'react';
import './HamburgerMenuBtn.css';
import menuIcon from '../hamburger-menu.png';
const HamburgerMenuBtn = () => {

	return(
		<div className="hamburger-menu">
			<img src={menuIcon} alt="Menu icon" />
		</div>
	)
}

export default HamburgerMenuBtn;