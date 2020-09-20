import React from 'react';
import './CombatantInfoCard.css';


const CombatantInfoCard = ({hamster}) => {
	return(
		<div>
			<main className="combatant-info">
				<div><span>Name:</span>{hamster.name}</div>
				<div><span>Age:</span>{hamster.age}</div>
				<div><span>Love:</span>{hamster.loves}</div>
				<div><span>Favorite food:</span>{hamster.favFood}</div>
				<div><span>Wins:</span>{hamster.wins}</div>
				<div><span>Games:</span>{hamster.games}</div>
			</main>

		</div>
		
	)
}

export default CombatantInfoCard;