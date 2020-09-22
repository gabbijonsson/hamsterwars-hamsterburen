import React,{useState} from 'react';
import './StatsToplistCombatant.css';

const StatsToplistCombatant = ({CombatantImg, combatant, combatantInfo}) => {
	 let info = '';
	 let text = '';
	
	 switch(combatantInfo){
		 case 'AGE':
			info = combatant.age;
			text = 'y/o';
			 break;
		 case 'WINS' :
			info = combatant.wins;
			text = 'WINS';
			 break;
		 case 'LOSTS':
			 text = 'LOSTS';
			 info = combatant.losts;
			 break;
		 default:
			 text = '%';
			 break;
	 }

	return(
		<div className="stats-combatant">
			 <div>
				<img src={CombatantImg} alt="combatant" />
			 </div>
			<div>
				{combatant.name}
			</div>
			<div>
				{info} {text}
			</div>

		</div>
	)
}

export default StatsToplistCombatant;