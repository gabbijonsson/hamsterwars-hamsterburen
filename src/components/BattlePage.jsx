import React, {useEffect, useState} from 'react';
import './BattlePage.css';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';
import {Link} from 'react-router-dom';

const BattlePage = ({showResult,pickWinner,showOwnFighter}) => {
	
	const [hamsters, setHamsters] = useState([]);
	let image1 = '';
	let image2 = '';
	let id1 = '', id2='';
	
	
	useEffect(() => {
		let mounted = true;
		function getRandomHamsters(callback) {
			fetch(
				"api/gethamsters/random?count=2"
			)
				.then((res) => res.json())
				.then( 
					(result) => {
						if(mounted){
							console.log('1');
							callback(result);
						}
				},
					(error) => {
						console.log("error", error);
					}
				);
		}

		getRandomHamsters(setHamsters);

		return () => mounted = false;
		
	}, []);
	 
     if(hamsters.length > 0){
		 image1 = hamsters[0].imgName;
		 image2 = hamsters[1].imgName;
		 id1 = hamsters[0].id;
		 id2 = hamsters[1].id;
	 }

	return(
		<div className="battlepage">
                
				<div className="stack-up1">
					<PickWinnerBtn pickWinner={()=>pickWinner(id1)}/>
				</div>
				<div className="stack-up2">
					<PickWinnerBtn id={id2}/>
				</div>
			    
            <div className="battlepage-main">
			    <CombatantCard CombatantImg={image1} borderColor='blue'/>

				
			
				<h1>VS.</h1>

				<CombatantCard CombatantImg={image2} borderColor='purple'/>

				

				<div className='generic'>
							<GenericBtn text ='Pick your own fighter' color='teal' />	
				</div>
			</div>
		</div>
	)
}

export default BattlePage;

