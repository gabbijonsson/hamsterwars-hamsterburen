import React from 'react'
import './HeaderGeneric.css'
import HomeIcon from './HomeIcon.svg'
import HamburgerMenu from './HamburgerMenu'
import HamburgerMenuBtn from './HamburgerMenuBtn'
import DesktopHeaderBtn from './DesktopHeaderBtn'

function HeaderGeneric({showHome,showStats,showBattle,showCreate}) {
	return (
		<header id='HeaderGeneric'>
			<div className="header-item-1">
				<img src={HomeIcon} alt="App icon (to go home)" onClick={showHome} />
				
				<div className="desktop-nav">
					<HamburgerMenu showHome={showHome} showBattle={showBattle} showStats={showStats} showCreate={showCreate} />
				</div>
			</div>
			<div className="header-item-2">

			</div>
			<div className="header-item-3">
				<HamburgerMenuBtn showHome={showHome} showBattle={showBattle} showStats={showStats} showCreate={showCreate} />
				<div className="desktop-header-btn">
					<DesktopHeaderBtn text="PICK YOUR OWN FIGHTERS" color="teal"/>
				</div>
			</div>
			
		</header>
	)
}

export default HeaderGeneric