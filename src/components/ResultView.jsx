import React, { useState,useEffect} from 'react'
import CombatantPicCard from './CombatantPicCard'
import GenericBtn from './GenericBtn'
import ScrollContainer from './ScrollContainer'
import CombatantInfoCard from './CombatantInfoCard'
import './ResultView.css'
import LoserHamster from '../assets/frontend/CryingHamster.svg';


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
function ResultView({winId,losId}) {
	
	const [winnerHamster, setWinnerHamster] = useState();
	const [loserHamster, setLoserHamster] = useState();
	let loser='';
	
	
    useEffect(() => {
			let mounted = true;
			function getHamster(callback) {
				fetch(
					` https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${winId}`
				)
					.then((res) => res.json())
					.then(
						(result) => {
							if(mounted){
								callback(result)
							}
							
						},
						(error) => {
							console.error("error", error);
						}
					);
			}

				getHamster(setWinnerHamster);	
				return () => mounted = false;

	}, [winId]);

	useEffect(() => {
		let mounted = true;
		function getLoser(callback) {
			fetch(
				` https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${losId}`
			)
				.then((res) => res.json())
				.then(
					(result) => {
						if(mounted){
							callback(result)
						}
						
					},
					(error) => {
						console.error("error", error);
					}
				);
		}

			getLoser(setLoserHamster);
			return () => mounted = false;	
	
	}, [losId]);


	if(winnerHamster){
		
		hamster = winnerHamster;
		hamsterImg = winnerHamster.imgName;
		
	}
	if(loserHamster){
		loser = loserHamster;
		console.log('loser is:', loserHamster);
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
                <img src={LoserHamster} alt="LoserHamster"></img>
				<span className="loser-info">{loser.name}, {loser.age} y/o is loser </span>
			</div>
			<div className="resultView-mobile-btn"> 
				<GenericBtn color="peach" text="BATTLE"  link="/battle"/>
			</div>
		</div>
	)
}

export default ResultView