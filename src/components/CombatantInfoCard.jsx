import React from 'react';
import './CombatantInfoCard.css';


const CombatantInfoCard = ({hamster}) => {

	return(
		<div>
			<main className="combatant-info">
				<div>Name:{hamster.name}</div>
				<div>Age:{hamster.age}</div>
				<div>Love:{hamster.loves}</div>
				<div>Favorite food:{hamster.food}</div>
				<div>Wins:{hamster.wins}</div>
				<div>Games:{hamster.games}</div>
           
			</main>

		</div>
		
	)
}

export default CombatantInfoCard;