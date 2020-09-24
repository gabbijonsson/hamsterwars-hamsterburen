import React from 'react';
import './StartPage.css';
import MenuCard from './MenuCard';
import BattleImg from '../assets/frontend/KarateHamster.svg';
import StatisticsImg from '../assets/frontend/NutHamster.svg';
import AddImg from '../assets/frontend/JoyfulHamster.svg';

const StartPage = ({showBattle, showStats, showCreate}) => {
	return(
		<div className="startpage">

			<main className="startpage-main">
               <MenuCard showPage={showBattle} color='peach' text='Battle' img={BattleImg} />
			   <MenuCard showPage={showStats} color='teal' text='Statistics' img={StatisticsImg}/>
			   <MenuCard showPage={showCreate} color='pink' text='Add your hamster' img={AddImg} />
			</main>
		</div>
	)
}

export default StartPage;