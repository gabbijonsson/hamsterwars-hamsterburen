import React, {useState, useEffect} from 'react';
import './StatisticsView.css';
import ScrollContainer from './ScrollContainer';
import StatsToplist from './StatsToplist';
import StatsToplistCombatant from './StatsToplistCombatant';
import GenericBtn from './GenericBtn';
import TotalNoMatches from './TotalNoMatches';
import hamster1 from '../assets/hamsters/hamster-1.jpg';
import { response } from 'express';




const StatisticsView = ({total}) => {
	const [winner, setWinner] = useState([]);
	const [loser, setLoser] = useState([])
	const [youngest, setYoungest] = useState([])
	const [oldest, setOldest] = useState([])
	useEffect(() => {
		console.log('inside useEffect');
		let fetchStats = async () => {
			const winner = await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=winner')
			.then(response => response.json()).then(winner => setWinner(winner))
			const loser = await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=loser')
			.then(response => response.json()).then(loser => setLoser(loser))
			const youngest = await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=youngest')
			.then(response => response.json()).then(youngest => setYoungest(youngest))
			const oldest = await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=oldest')
			.then(response => response.json()).then(oldest => setOldest(oldest))
		}
		fetchStats()
	}, [])
	const [moreStats, setMoreStats] = useState(false);
    const [buttonTxt,setButtonTxt] = useState('more stats');
	
	
	const lessOrMoreStats = () => {
		setMoreStats(!moreStats); 
		if(!moreStats)
		setButtonTxt('less stats');
		else
		setButtonTxt('more stats');
	}
	
	

	const combatant = [
		{id:0, name: 'Sweetie', age:4, wins: 1, losts: 3, img:hamster1},
		{id:1, name: 'Sweetie', age:4, wins: 1, losts: 3, img:hamster1},
		{id:2, name: 'Sweetie', age:4, wins: 1, losts: 3, img:hamster1},
		{id:3, name: 'Sweetie', age:4, wins: 1, losts: 3, img:hamster1},
		{id:4, name: 'Sweetie', age:4, wins: 1, losts: 3, img:hamster1}]

		let topWinners = winner.map((hamster) => 
		          
						<div key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='WINS' />
						</div>)

		let topLosers = loser.map((hamster) => 
						<div key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='LOSTS' />
						</div>)
						

		let topOldest = oldest.map((hamster) =>
						<div className="item1" key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='AGE' />
						</div>)

		let topYoungest = youngest.map((hamster) =>
						<div className="item1" key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='AGE' />
						</div>)

	return(
		<div className="stats-view">
			{}
			<ScrollContainer content='stats'>
				<div>
					   <section className="main-stats">
							<TotalNoMatches total={total} />
							<StatsToplist title="winners">
								{topWinners}

							</StatsToplist>
							<StatsToplist title="losers">
								{topLosers}

							</StatsToplist>
					   </section>
						

						<section className={ moreStats===true ? 'visible' : 'invisible'}>
							
								<StatsToplist title="oldest">
									<div className="item2">{topOldest}</div>
								</StatsToplist>
							
							
							<StatsToplist title="youngest">
								<div className="item2">{topYoungest}</div>

							</StatsToplist>
							<StatsToplist title="%">
								<div className="item2">{topWinners}</div>

							</StatsToplist>

						</section>
				</div>
				
				
			</ScrollContainer>	
			<div onClick={lessOrMoreStats}>
				<GenericBtn text={buttonTxt} color='peach' link="/stats"/>
			</div>
	 		
			
			

		</div>
	)
}

export default StatisticsView;