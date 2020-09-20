import React from 'react';
import './CombatantCard.css';


const CombatantCard = ({CombatantImg, borderColor}) => {
   
	
	return (
		<article className={`combatant-card border-${borderColor}`}>
           <img src={CombatantImg} alt="combatant" />
		</article>
	)
}

export default CombatantCard;