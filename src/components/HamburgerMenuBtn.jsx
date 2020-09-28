import React, { useState } from 'react';
import './HamburgerMenuBtn.css';
import HamburgerMenu from './HamburgerMenu';

const HamburgerMenuBtn = () => {
  const [myclass, setMyClass] = useState(true);
	

	return(

		
		<div className="hamburger-menu">
            
			<div id="nav-icon1" className={(!myclass) ? 'open' : ''} onClick={()=>setMyClass(!myclass)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		
			<div className = { (!myclass) ? 'visible-content' : 'invisible-content'}>
				<HamburgerMenu  />
			</div>
			
		</div>
	)
}

export default HamburgerMenuBtn;