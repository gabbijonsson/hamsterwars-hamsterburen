import React from 'react';
import './PickFightersView.css';
import CombatantCard from './CombatantCard';
import PickWinnerBtn from './PickWinnerBtn';
import SelectFighter from './SelectFighter';
import GenericBtn from './GenericBtn';
import {Link} from 'react-router-dom';

const PickFightersView = ({img1,img2}) => {
	return(
		<div>
			
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
			<div className ="pickWinnerBtns">
					<PickWinnerBtn />
					<PickWinnerBtn />
			</div>

			<div className="generic-btn">
				<Link to="/battle">
					<GenericBtn text='Battle' color='teal'/>	
				</Link>

			</div>	
			
			
			
		</div>
	)
}

export default PickFightersView;