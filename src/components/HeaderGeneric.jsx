import React from 'react'
import './HeaderGeneric.css'
import HomeIcon from './HomeIcon.svg'
import HamburgerMenu from './HamburgerMenu'
import HamburgerMenuBtn from './HamburgerMenuBtn'
import DesktopHeaderBtn from './DesktopHeaderBtn'
import {Link} from 'react-router-dom';

function HeaderGeneric() {
	return (
		<header id='HeaderGeneric'>
			<div className="header-item-1">
				<Link to="/">
					<img src={HomeIcon} alt="App icon (to go home)"/>
				</Link>

				
				<div className="desktop-nav">
					<HamburgerMenu/>
				</div>
			</div>
			<div className="header-item-2">

			</div>
			<div className="header-item-3">
				<HamburgerMenuBtn/>
				<div className="desktop-header-btn">
					<DesktopHeaderBtn text="PICK YOUR OWN FIGHTERS" color="teal"/>
				</div>
			</div>
			
		</header>
	)
}

export default HeaderGeneric