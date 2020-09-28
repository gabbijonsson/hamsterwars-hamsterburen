import React from 'react'
import './HeaderGeneric.css'
import HomeIcon from './HomeIcon.svg'
import HamburgerMenu from './HamburgerMenu'
import HamburgerMenuBtn from './HamburgerMenuBtn'
import DesktopHeaderBtn from './DesktopHeaderBtn'
import {Link} from 'react-router-dom';

function HeaderGeneric({showHome,showStats,showBattle,showCreate,showOwnFighter}) {
	return (
		<header id='HeaderGeneric'>
			<div className="header-item-1">
				<Link to="/">
					<img src={HomeIcon} alt="App icon (to go home)"/>
				</Link>

				
				<div className="desktop-nav">
					<HamburgerMenu showHome={showHome} showBattle={showBattle} showStats={showStats} showCreate={showCreate} />
				</div>
			</div>
			<div className="header-item-2">

			</div>
			<div className="header-item-3">
				<HamburgerMenuBtn showHome={showHome} showBattle={showBattle} showStats={showStats} showCreate={showCreate} />
				<div className="desktop-header-btn">
					<Link to="battle/:id1/:id2">
					<DesktopHeaderBtn text="PICK YOUR OWN FIGHTERS" color="teal" functionality={showOwnFighter} />
					</Link>
				</div>
			</div>
			
		</header>
	)
}

export default HeaderGeneric;