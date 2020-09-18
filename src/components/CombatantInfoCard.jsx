import React from 'react';
import './CombatantInfoCard.css';


const CombatantInfoCard = ({hamster}) => {
	return(
		<div>
			<main className="combatant-info">
				<div><span>Name:</span>{hamster.[0].name}</div>
				<div><span>Age:</span>{hamster.[0].age}</div>
				<div><span>Love:</span>{hamster.[0].loves}</div>
				<div><span>Favorite food:</span>{hamster.[0].favFood}</div>
				<div><span>Wins:</span>{hamster.[0].wins}</div>
				<div><span>Games:</span>{hamster.[0].games}</div>
           
			</main>

		</div>
		
	)
}

export default CombatantInfoCard;