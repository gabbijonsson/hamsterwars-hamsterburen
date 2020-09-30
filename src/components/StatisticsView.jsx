import React, {useState, useEffect} from 'react';
import './StatisticsView.css';
import ScrollContainer from './ScrollContainer';
import StatsToplist from './StatsToplist';
import StatsToplistCombatant from './StatsToplistCombatant';
import GenericBtn from './GenericBtn';
import TotalNoMatches from './TotalNoMatches';




const StatisticsView = ({total}) => {
	const [winner, setWinner] = useState([]);
	const [loser, setLoser] = useState([])
	const [youngest, setYoungest] = useState([])
	const [oldest, setOldest] = useState([])
	const [totalMatches, setTotalMatches] = useState(Number())
	const [moreStats, setMoreStats] = useState(false);
	const [buttonTxt,setButtonTxt] = useState('more stats');
	
	useEffect(() => {
		let fetchStats = async () => {
			
			await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=winners')
			.then(response => response.json()).then(result => setWinner(result))
			await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=losers')
			.then(response => response.json()).then(result => setLoser(result))
			await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=youngest')
			.then(response => response.json()).then(result => setYoungest(result))
			await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getstats?category=oldest')
			.then(response => response.json()).then(result => setOldest(result))
			await fetch('https://hamsterwars-hamsterburen.herokuapp.com/api/getmatchcount')
			.then(response => response.json()).then(result => setTotalMatches(result))
		}
		fetchStats()
	}, [])	
	
	const lessOrMoreStats = () => {
		setMoreStats(!moreStats); 
		if(!moreStats){
			setButtonTxt('less stats');
			document.getElementById('scroll-down').scrollIntoView({ behavior: 'smooth', block: 'end' });
			
		}
		else{
			setButtonTxt('more stats');
			// document.getElementById('side-stats').scrollTo(0, -2000)
			document.getElementById('scroll-up').scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
	function scrollUp (){
		// document.getElementById('content').scrollBy(0, -200)
	}
	function scrollDown (){
		// document.getElementById('content').scrollBy(0, 2000)
		
	}


		let topWinners = winner.map((hamster) => 
		          
						<div key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='WINS' />
						</div>)

		let topLosers = loser.map((hamster) => 
						<div key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='LOSTS' />
						</div>)
						

		let topOldest = oldest.map((hamster) =>
						<div  key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='AGE' />
						</div>)

		let topYoungest = youngest.map((hamster) =>
						<div  key={hamster.id}> 
							<StatsToplistCombatant combatant={hamster} combatantInfo='AGE' />
						</div>)

	return(
		<div className="stats-view">
			<span id="scroll-up"></span>
			<ScrollContainer content='stats'>
				<div id="content">
					   <section className="main-stats">
							<TotalNoMatches total={totalMatches} />
							<StatsToplist title="winners">
								{topWinners}

							</StatsToplist>
							<StatsToplist title="losers">
								{topLosers}

							</StatsToplist>
					   </section>
						

						<section style={ moreStats ? {display: 'grid'} : {display: 'none'}} id="side-stats">
							
								<StatsToplist title="oldest">
									{/* <div className="item2">{topOldest}</div> */}
									{topOldest}
								</StatsToplist>
							
							
							<StatsToplist title="youngest">
								{/* <div className="item2">{topYoungest}</div> */}
								{topYoungest}
							</StatsToplist>
							

						</section>
						<span id="scroll-down"></span>
				</div>
				
				
			</ScrollContainer>	
			{ moreStats ? 
			<div onClick={() => {lessOrMoreStats(); scrollUp()	}}>
				<GenericBtn text={buttonTxt} color='peach' link="/stats"/>
			</div>
	 		: <div onClick={() => {lessOrMoreStats(); scrollDown()	}}>
			 <GenericBtn text={buttonTxt} color='peach' link="/stats"/>
		 </div>
			 }
			
			

		</div>
	)
}

export default StatisticsView;