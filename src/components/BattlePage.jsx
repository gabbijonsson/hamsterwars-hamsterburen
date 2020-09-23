import React, {useEffect} from 'react';
import './BattlePage.css';
import HeaderGeneric from '../components/HeaderGeneric';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';

const BattlePage = ({img1,img2}) => {

    let randomHamstersResult =[];
	
	 async function getAllStations(){
		try{
			const response = await fetch( '/gethamsters/random?count=2' ,{method:'GET'});
			const data = await response.json();
			console.log(`Here: ${data}`)
		} catch(e) {
			console.log(`Error: ${e}`)
		}
	
	}

			
   
	

	return(
		<div className="battlepage">
                <button onClick={getAllStations}>Click</button>
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