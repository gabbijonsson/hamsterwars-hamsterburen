import React from 'react'
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
function ResultView() {
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
			<GenericBtn color="peach" text="BATTLE"/>

			</div>
		</div>
	)
}

export default ResultView
