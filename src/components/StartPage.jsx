import React from 'react';
import './StartPage.css';
import MenuCard from './MenuCard';
import BattleImg from '../assets/frontend/KarateHamster.svg';
import StatisticsImg from '../assets/frontend/NutHamster.svg';
import AddImg from '../assets/frontend/JoyfulHamster.svg';
import DescriptionText from './DescriptionText'

const StartPage = ({showBattle, showStats, showCreate}) => {
let textPart1 = "Tired of cleaning up after your hamsters MMA-rounds?" 
let textPart2 = "Now you can have the battles in our virtual cage. Let your hamster go head to head with some of the most adorable combatants out there. Track the hamsters performance with our Statistics-tool, or add more hamsters to your roster with the upload-feature!"
	return(
		<div className="startpage">
			<div className="description-text text-start">
				{textPart1} <br/> {textPart2}
			</div>
			<main className="startpage-main">
               <MenuCard showPage={showBattle} color='peach' text='Battle' img={BattleImg} />
			   <MenuCard showPage={showStats} color='teal' text='Statistics' img={StatisticsImg}/>
			   <MenuCard showPage={showCreate} color='pink' text='Add your hamster' img={AddImg} />
			</main>
		</div>
	)
}

export default StartPage;