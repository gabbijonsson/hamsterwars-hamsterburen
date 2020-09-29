import React, {useEffect, useState} from 'react';
import './BattlePage.css';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';
import {useParams} from 'react-router-dom';

const BattlePage = ({pickWinner}) => {
	
	const [hamsters, setHamsters] = useState([]);
	let image1 = '';
	let image2 = '';
	let hamster1 = '', hamster2='';
	
	const {id1, id2} = useParams();
	if(id1 && id2){
		getChosenHamsters(id1, id2);
	}

	async function getChosenHamsters(id1, id2){
		let res1 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${id1}`)
		let userHamster1 = await res1.json()
		
		let res2 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${id2}`)
		let userHamster2 = await res2.json()

		setHamsters([userHamster1 , userHamster2]);
	}


	
	
	useEffect(() => {
		let mounted = true;
		function getRandomHamsters(callback) {
			fetch(
				" https://hamsterwars-hamsterburen.herokuapp.com/api/gethamsters/random?count=2"
			)
				.then((res) => res.json())
				.then( 
					(result) => {
						if(mounted){
							callback(result);
						}
				},
					(error) => {
						console.error("error", error);
					}
				);
		}
		if(!id1){
			getRandomHamsters(setHamsters);
		}


		return () => mounted = false;
		
	}, []);
	 
     if(hamsters.length > 0){
		 image1 = hamsters[0].imgName;
		 image2 = hamsters[1].imgName;
		 hamster1 = hamsters[0].id;
		 hamster2 = hamsters[1].id;
	 }
		

	return(
		<div className="battlepage">
                
				<div className="stack-up1">
					<PickWinnerBtn pickWinner={()=>pickWinner(hamster1)}/>
				</div>
				<div className="stack-up2">
					<PickWinnerBtn pickWinner={()=>pickWinner(hamster2)}/>
				</div>
			    
            <div className="battlepage-main">
			    <CombatantCard CombatantImg={image1} borderColor='blue'/>

				
			
				<h1>VS.</h1>

				<CombatantCard CombatantImg={image2} borderColor='purple'/>

				

				<div className='generic'>
					
						<GenericBtn text ='Pick your own fighter' color='teal' link="/pickfighters" />
	
				</div>
			</div>
		</div>
	)
}

export default BattlePage;

