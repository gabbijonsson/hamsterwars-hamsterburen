import React from 'react';
import './CombatantCard.css';


const CombatantCard = ({CombatantImg, borderColor}) => {
   
	
	return (
		<div className={`combatant-card border-${borderColor}`}>
           <img src={CombatantImg} alt="combatant" />
		</div>
	)
}

export default CombatantCard;