import React, {useEffect, useState} from 'react';
import './BattlePage.css';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';

const BattlePage = ({img1,img2}) => {
	
	const [hamsters, setHamsters] = useState([]);
	let image1 = '';
	let image2 = '';
	
	
	function getRandomHamsters(callback) {
		fetch(
			"/gethamsters/random?count=4"
		)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log('2');
					callback(result);
				},
				(error) => {
					console.log("error", error);
				}
			);
	}
	
	
	useEffect(() => {
		getRandomHamsters(setHamsters);
		
	}, []);
	 
	
     if(hamsters.length > 0){
		 console.log('hamsters is:', hamsters);
		 image1 = hamsters[0].imgName;
		 image2 = hamsters[1].imgName;
		 
		}
		
		console.log(image1);
		console.log(image2);
	 

	return(
		<div className="battlepage">
                
				<div className="stack-up1">
					<PickWinnerBtn />
				</div>
				<div className="stack-up2">
					<PickWinnerBtn />
				</div>
			    
            <div className="battlepage-main">
			    <CombatantCard CombatantImg={image1} borderColor='blue'/>

				
			
				<h1>VS.</h1>

				<CombatantCard CombatantImg={image2} borderColor='purple'/>

				

				<div className='generic'>
					<GenericBtn text ='Pick your own fighter' color='teal'/>
				</div>
			
			</div>


		</div>
	)
}

export default BattlePage;