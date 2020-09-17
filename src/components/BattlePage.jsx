import React from 'react';
import './BattlePage.css';
import HeaderGeneric from '../components/HeaderGeneric';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';

const BattlePage = ({img1,img2}) => {
	return(
		<div className="battlepage">
			<HeaderGeneric />
			<CombatantCard CombatantImg={img1} borderColor='blue'/>
			<PickWinnerBtn />
			<div>
				<h1>VS.</h1>
			</div>
			<CombatantCard CombatantImg={img2} borderColor='purple'/>
			<PickWinnerBtn />
			<GenericBtn text ='Pick your own fighter' color='teal'/>


		</div>
	)
}

export default BattlePage;