import React, { useState,useEffect} from 'react'
import CombatantPicCard from './CombatantPicCard'
import GenericBtn from './GenericBtn'
import ScrollContainer from './ScrollContainer'
import CombatantInfoCard from './CombatantInfoCard'
import './ResultView.css'
import {useParams} from 'react-router-dom';

let hamster = 
		{
			name:"",
			age:1,
			favFood:"",
			loves:"",
			imgName:"",
			wins:0,
			defeats:0,
			games:0
		}

let hamsterImg;
function ResultView({fromOther}) {
	const {id} = useParams();
	const [winnerHamster, setWinnerHamster] = useState();

	if(!winnerHamster && !isNaN(Number(id))){
		getHamster(id);
	}
	
	
	async function getHamster(id) {

		let res = await fetch( `https://hamsterwars-hamsterburen.herokuapp.com/api/getmatch?id=${id}`);
		let match = await res.json();
		
		let res2 = await fetch( `https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${match.winner}`)
		let winner = await res2.json();
		
		setWinnerHamster(winner);

	}
	
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
				<GenericBtn color="peach" text="BATTLE"  link="/battle"/>
			</div>
		</div>
	)
}

export default ResultView