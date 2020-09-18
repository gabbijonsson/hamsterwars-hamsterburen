import React from 'react'
import CombatantPicCard from './CombatantPicCard'
import GenericBtn from './GenericBtn'
import ScrollContainer from './ScrollContainer'
import TestHamsterPic from '../assets/frontend/JoyfulHamster.svg'
import './ResultView.css'

function ResultView() {
	return (
		<div className="resultView-container">
			<div className="resultView-pic-card">
			<CombatantPicCard CombatantImg={TestHamsterPic}/>
			</div>
			<div className="resultView-info-card">			
				<ScrollContainer content="hamsterInfo"/>
			</div>
			<div className="resultView-mobile-btn">
			<GenericBtn color="peach" text="BATTLE"/>

			</div>
		</div>
	)
}

export default ResultView
