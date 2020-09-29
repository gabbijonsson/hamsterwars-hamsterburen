import React from 'react';
import './CombatantCard.css';
import GenericHamster from './GenericHamster';


const CombatantCard = ({CombatantImg, borderColor,defaultImg}) => {
	  
	let contentImg = null;

	if(CombatantImg){
		contentImg = <img src={CombatantImg} alt="combatant" />
	}else if(defaultImg){
		contentImg = <GenericHamster GenericImg={defaultImg} />
	}
	
	return (
		<article className={`combatant-card border-${borderColor}`}>
           {contentImg}
		</article>
	)
}

export default CombatantCard;