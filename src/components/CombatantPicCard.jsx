import React from 'react';
import './CombatantPicCard.css';
import GenericHamster from './GenericHamster';

const CombatantPicCard = ({CombatantImg}) => {

	return(
		<div className="combatant-pic">
			<img src={CombatantImg} alt="Combatant" />

		</div>
	)
}

export default CombatantPicCard;