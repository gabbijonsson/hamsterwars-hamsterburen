import React from 'react';
import './BattlePage.css';
import HeaderGeneric from '../components/HeaderGeneric';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';

const BattlePage = ({img1,img2}) => {
	return(
		<div className="battlepage">
                
				<div className="stack-up1">
					<PickWinnerBtn />
				</div>
				<div className="stack-up2">
					<PickWinnerBtn />
				</div>
			    
				<HeaderGeneric />
            <div className="battlepage-main">
			    <CombatantCard CombatantImg={img1} borderColor='blue'/>

				
			
				<h1>VS.</h1>

				<CombatantCard CombatantImg={img2} borderColor='purple'/>

				

				<div className='generic'>
					<GenericBtn text ='Pick your own fighter' color='teal'/>
				</div>
			
			</div>


		</div>
	)
}

export default BattlePage;