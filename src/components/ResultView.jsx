import React, { useState,useEffect} from 'react'
import CombatantPicCard from './CombatantPicCard'
import GenericBtn from './GenericBtn'
import ScrollContainer from './ScrollContainer'
import CombatantInfoCard from './CombatantInfoCard'
import TestHamsterPic from '../assets/frontend/JoyfulHamster.svg'
import './ResultView.css'
let hamster = 
		{
			name:"Sixten",
			age:1,
			favFood:"ostbollar",
			loves:"Running that wheeeeeeeeeeeeeeeel!",
			imgName:"hamster-1.jpg",
			wins:0,
			defeats:0,
			games:0
		}

let hamsterImg = TestHamsterPic;
function ResultView({id}) {
	const [winnerHamster, setWinnerHamster] = useState();
	
	
    useEffect(() => {
    
		
	function getHamster(callback) {
		fetch(
			` https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${id}`
		)
			.then((res) => res.json())
			.then(
				(result) => {
					
					callback(result)
				},
				(error) => {
					console.log("error", error);
				}
			);
	}

		getHamster(setWinnerHamster);
		
	}, []);

	if(winnerHamster){
		
		hamster = winnerHamster;
		hamsterImg = winnerHamster.imgName;
	}

	return (
		<div className="resultView-container">
			<div className="resultView-pic-card">
			<CombatantPicCard CombatantImg={hamsterImg}/>
			</div>
			<div className="resultView-info-card">			
				<ScrollContainer  content="hamsterInfo">
					<CombatantInfoCard hamster={hamster}/>
				</ScrollContainer>
			</div>
			<div className="resultView-mobile-btn">
			<GenericBtn color="peach" text="BATTLE" page="result" link="/battle"/>

			</div>
		</div>
	)
}

export default ResultView
