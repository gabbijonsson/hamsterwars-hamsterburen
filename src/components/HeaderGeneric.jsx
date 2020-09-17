import React from 'react'
import './HeaderGeneric.css'
import HomeIcon from '../assets/frontend/HomeIcon.svg'

function HeaderGeneric() {
	return (
		<header id='HeaderGeneric'>
			<div className="header-item-1">
				<img src={HomeIcon} alt="App icon (to go home)"/>
			</div>
			<div className="header-item-2">

			</div>
			<div className="header-item-3">

			</div>
			
		</header>
	)
}

export default HeaderGeneric