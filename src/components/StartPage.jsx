import React from 'react';
import './StartPage.css';
import MenuCard from './MenuCard';
import BattleImg from '../assets/frontend/KarateHamster.svg';
import StatisticsImg from '../assets/frontend/NutHamster.svg';
import AddImg from '../assets/frontend/JoyfulHamster.svg';
import {Link} from 'react-router-dom';

const StartPage = ({showBattle, showStats, showCreate}) => {
	return(
		<>

			<main className="startpage-main">
				<Link to="/battle">
					<MenuCard color='peach' text='Battle' img={BattleImg} />
				</Link>
				<Link to="/stats">
					<MenuCard color='teal' text='Statistics' img={StatisticsImg}/>
				</Link>
				<Link to="/upload">
					<MenuCard color='pink' text='Add your hamster' img={AddImg} />
				</Link>

			</main>
		</>
	)
}

export default StartPage;