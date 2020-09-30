import React, { useState} from 'react'
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
	let loser = '';

let hamsterImg;
function ResultView({fromOther}) {
	const {id} = useParams();
	const [winnerHamster, setWinnerHamster] = useState();
	const [loserHamster, setLoserHamster] = useState();

	if(!winnerHamster && !isNaN(Number(id))){
		getHamster(id);
	}
	
	
	async function getHamster(id) {

		let res = await fetch( `https://hamsterwars-hamsterburen.herokuapp.com/api/getmatch?id=${id}`);
		let match = await res.json();
		
		let res2 = await fetch( `https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${match.winner}`)
		let winner = await res2.json();

		let res3 = await fetch( `https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${match.loser}`)
		let loser = await res3.json();
		
		
		setWinnerHamster(winner);
		setLoserHamster(loser);

	}
	
	if(winnerHamster){
		
		hamster = winnerHamster;
		hamsterImg = winnerHamster.imgName;
		
	}
	if(loserHamster){
		loser = loserHamster;
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
			<div className="loser-hamster">
				<span className="loser-info">{loser.name} lost this match... </span>
			</div>
			<div className="resultView-mobile-btn"> 
				<GenericBtn color="peach" text="BATTLE"  link="/battle"/>
			</div>
		</div>
	)
}

export default ResultView