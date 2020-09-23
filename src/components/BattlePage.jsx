import React, {useEffect,useState} from 'react';
import './BattlePage.css';
import HeaderGeneric from '../components/HeaderGeneric';
import GenericBtn from '../components/GenericBtn';
import CombatantCard from '../components/CombatantCard';
import PickWinnerBtn from '../components/PickWinnerBtn';

const BattlePage = ({img1,img2}) => {

    
	
		const [hamsters, setHamsters] = useState([]);
		useEffect(() => {
		  getRandomHamsters(setHamsters);
		}, []);
	  
		
		function getRandomHamsters(callback) {
			fetch("http://localhost:1234/gethamsters/random?count=4")
			  .then((res) => res.json())
			  .then(
				(result) => {
				  callback(result);
				},
				(error) => {
				  console.log("error", error);
				}
			  );
		  }

		  
		// async function getRandomHamster(){
		// 	const response =  await fetch('http://localhost:1234/gethamsters/random?count=4' , {method:'GET'});
		// 	const result =  await response.json();
		// 	console.log('random result is:', result);
		// 	hamster = result;
		// }  
        //    console.log('result is', hamster);


			
   
	
   
	return(
		<div className="battlepage">
                <button onClick={()=> console.log(hamsters)}>Click</button>
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