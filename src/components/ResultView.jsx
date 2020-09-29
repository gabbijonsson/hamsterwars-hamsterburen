import React, { useState,useEffect} from 'react'
import CombatantPicCard from './CombatantPicCard'
import GenericBtn from './GenericBtn'
import ScrollContainer from './ScrollContainer'
import CombatantInfoCard from './CombatantInfoCard'
import './ResultView.css'


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
function ResultView({id}) {
	const [winnerHamster, setWinnerHamster] = useState();
	console.log('yees');
	
    useEffect(() => {
			
			let mounted = true;
			function getHamster(callback) {
				fetch(
					` https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${id}`
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
				<GenericBtn color="peach" text="BATTLE"  link="/battle"/>
			</div>
		</div>
	)
}

export default ResultView