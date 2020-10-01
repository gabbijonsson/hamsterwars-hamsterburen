import React, {useEffect} from 'react';
import './HamburgerMenu.css';
import {Link} from 'react-router-dom';
const HamburgerMenu = () => {
	useEffect(() => {
		if(sessionStorage.getItem('pathName')){
			let pathName = sessionStorage.getItem('pathName')
			if(pathName === '/'){
				var home = document.getElementById("Home");
				home.classList.add("active");
			}else if(pathName === '/battle'){
				var battle = document.getElementById("Battle");
				battle.classList.add("active");
			}else if(pathName === '/stats'){
				var stats = document.getElementById("Stats");
    			stats.classList.add("active");
			}else if(pathName === '/upload'){
				var create = document.getElementById("Create");
    			create.classList.add("active");
			}
		}
		
	}, [])
	return (
		<nav role="navigation" className="hamburger-content">
			<Link to="/">
				<h2 id="Home" role="link">Home</h2>
			</Link>
			<Link to="/battle">
				<h2 id="Battle" role="link">Battle</h2>
			</Link>
			<Link to="/stats">
				<h2 id="Stats" role="link">Statistics</h2>
			</Link>
			<Link to="/upload">
				<h2 id="Create" role="link">Create hamster</h2>
			</Link>
		</nav>
	);
}

export default HamburgerMenu;