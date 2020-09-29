import React from 'react';
import './CombatantPicCard.css';
import GenericHamster from './GenericHamster';

const CombatantPicCard = ({CombatantImg}) => {

	let jsx;

	if(CombatantImg===null){
		jsx = <GenericHamster />
		
	}else {
		jsx= <img src={CombatantImg} alt="Combatant" />
		
	}
    

	

	return(
		<div className="combatant-pic">
			{jsx}

		</div>
	)
}

export default CombatantPicCard;