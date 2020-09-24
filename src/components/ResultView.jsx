import React, { useState,useEffect} from 'react'
import CombatantPicCard from './CombatantPicCard'
import GenericBtn from './GenericBtn'
import ScrollContainer from './ScrollContainer'
import CombatantInfoCard from './CombatantInfoCard'
import TestHamsterPic from '../assets/frontend/JoyfulHamster.svg'
import './ResultView.css'
const hamster = 
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
function ResultView({id}) {
	console.log('id is:', id);
	const [winnerHamster, setWinnerHamster] = useState();

	function getHamster(callback) {
		fetch(
			`/gethamster?id=${id}`
		)
			.then((res) => res.json())
			.then(
				(result) => {
					console.log('1 winner is:',result);
					callback(result)
				},
				(error) => {
					console.log("error", error);
				}
			);
	}
	
    useEffect(() => {
		getHamster(setWinnerHamster);
		
	}, []);

	if(winnerHamster){console.log('2 winner is:', winnerHamster);}

	return (
		<div className="resultView-container">
			<div className="resultView-pic-card">
			<CombatantPicCard CombatantImg={TestHamsterPic}/>
			</div>
			<div className="resultView-info-card">			
				<ScrollContainer  content="hamsterInfo">
					<CombatantInfoCard hamster={hamster}/>
				</ScrollContainer>
			</div>
			<div className="resultView-mobile-btn">
			<GenericBtn color="peach" text="BATTLE" page="result"/>

			</div>
		</div>
	)
}

export default ResultView
