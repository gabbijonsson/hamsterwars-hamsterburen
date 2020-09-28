import React from 'react';
import './StartPage.css';
import MenuCard from './MenuCard';
import BattleImg from '../assets/frontend/KarateHamster.svg';
import StatisticsImg from '../assets/frontend/NutHamster.svg';
import AddImg from '../assets/frontend/JoyfulHamster.svg';
import {Link} from 'react-router-dom';

const StartPage = () => {
let textPart1 = 
	"Tired of messy hamsterfights?"; 
let textPart2 = 
	"Use our virtual cage.";
let textPart3 =
	"Let your hamster go head to head with some of the most adorable combatants out there, and track their stats from previous fights";
	return (
		<>
			<main className="startpage-main">
				<Link to="/battle">
					<MenuCard color="peach" text="Battle" img={BattleImg} />
				</Link>
				<Link to="/stats">
					<MenuCard
						color="teal"
						text="Statistics"
						img={StatisticsImg}
					/>
				</Link>
				<Link to="/upload">
					<MenuCard
						color="pink"
						text="Add hamster"
						img={AddImg}
					/>
				</Link>
			</main>
			<div className="startpage">
				<div className="description-text text-start">
					<p>{textPart1}</p>
					<p>{textPart2}</p>
					<p className="textpart3">{textPart3}</p>
				</div>
			</div>
		</>
	);
}

export default StartPage;