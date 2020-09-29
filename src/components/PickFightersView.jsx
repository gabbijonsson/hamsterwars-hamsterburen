import React from 'react';
import './PickFightersView.css';
import CombatantCard from './CombatantCard';
import PickWinnerBtn from './PickWinnerBtn';
import SelectFighter from './SelectFighter';
import GenericBtn from './GenericBtn';
import img1 from '../assets/frontend/GrinningHamster.svg';
import img2 from '../assets/frontend/HappyHamster.svg';


const PickFightersView = () => {
	
	return(
		<div className="pickFighterArea">
			<h1 className="selectFighterH1">Pick fighters</h1>
			<div className="selectFighter-form">
				<SelectFighter />
				<div className="choose-fightersBtn">
					<button><h1>choose!</h1></button>
				</div>
				
			</div>
			
			<div className="desktop-view">
				<CombatantCard CombatantImg={img1} borderColor='blue' />
				<h1>VS.</h1>
				<CombatantCard CombatantImg={img2} borderColor='purple' />
			</div>
			<div className = "pickWinnerBtns" >
				
					<PickWinnerBtn />
					<PickWinnerBtn />
				
					
			</div>

			<div className="generic-btn">
				<GenericBtn text='Battle' color='teal' link="/battle" />
			</div>	
			
			
			
		</div>
	)
}

export default PickFightersView;