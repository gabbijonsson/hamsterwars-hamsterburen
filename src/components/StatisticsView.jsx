import React, {useState} from 'react';
import './StatisticsView.css';
import ScrollContainer from './ScrollContainer';
import StatsToplist from './StatsToplist';
import StatsToplistCombatant from './StatsToplistCombatant';
import GenericBtn from './GenericBtn';
import TotalNoMatches from './TotalNoMatches';
import hamster1 from '../assets/hamsters/hamster-1.jpg';

const StatisticsView = ({total}) => {
	
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

		let topWinners = combatant.map((hamster) => 
		          
						<div key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='WINS' />
						</div>)

		let topLosers = combatant.map((hamster) => 
						<div key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='LOSTS' />
						</div>)
						

		let oldest = combatant.map((hamster) =>
						<div className="item1" key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='AGE' />
						</div>)

		let youngest = combatant.map((hamster) =>
						<div className="item1" key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='AGE' />
						</div>)

	return(
		<div className="stats-view">
			
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
									<div className="item2">{oldest}</div>
								</StatsToplist>
							
							
							<StatsToplist title="youngest">
								<div className="item2">{youngest}</div>

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