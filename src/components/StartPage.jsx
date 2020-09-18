import React from 'react';
import './StartPage.css';
import StartHeader from './StartHeader';
import MenuCard from './MenuCard';
import BattleImg from '../assets/frontend/KarateHamster.svg';
import StatisticsImg from '../assets/frontend/NutHamster.svg';
import AddImg from '../assets/frontend/JoyfulHamster.svg';

const StartPage = ({showBattle, showStats, showCreate}) => {
	return(
		<div className="startpage">
			<header>
				<StartHeader />
			</header>

			<main className="startpage-main">
               <MenuCard onClick={()=>showBattle()} color='peach' text='Battle' img={BattleImg} />
			   <MenuCard onClick={()=>showStats()} color='teal' text='Statistics' img={StatisticsImg}/>
			   <MenuCard onClick={()=>showCreate()} color='pink' text='Add your hamster' img={AddImg} />
			</main>
		</div>
	)
}

export default StartPage;