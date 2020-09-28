import React, { useState } from 'react';
import './HamburgerMenuBtn.css';
import HamburgerMenu from './HamburgerMenu';

const HamburgerMenuBtn = ({showHome, showBattle, showStats, showCreate}) => {
  const [myclass, setMyClass] = useState(true);
	

	return(

		
		<div className="hamburger-menu">
            
			<div id="nav-icon1" className={(!myclass) ? 'open' : ''} onClick={()=>setMyClass(!myclass)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		
			<div className = { (!myclass) ? 'visible-content' : 'invisible-content'}>
				<HamburgerMenu showHome={showHome} showBattle={showBattle} showStats={showStats} showCreate={showCreate} />
			</div>
			
		</div>
	)
}

export default HamburgerMenuBtn;