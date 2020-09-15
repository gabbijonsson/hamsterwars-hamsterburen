import React, { useState } from 'react';
import './HamburgerMenuBtn.css';
import menuIcon from '../hamburger-menu.png';
import HamburgerMenu from './HamburgerMenu';
import menuClose from '../CloseHamburger.svg';

const HamburgerMenuBtn = () => {
  const [myclass, setMyClass] = useState(true);
	

	return(

		
		<div className="hamburger-menu">
			<div>
				<img className = {(!myclass) ? 'invisible' : 'visible'} src={menuIcon} alt="Menu icon" onClick={() => setMyClass(!myclass)} />
				<img className = {(!myclass) ? 'visible' : 'invisible'} src={menuClose} alt="Close-menu Icon" onClick={() => setMyClass(!myclass)}/>
			</div>
				
			
			

			<div className = { (!myclass) ? 'visible-content' : 'invisible-content'}>
				<HamburgerMenu />
			</div>
			
		</div>
	)
}

export default HamburgerMenuBtn;