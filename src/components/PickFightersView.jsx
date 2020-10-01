import React,{useState} from 'react';
import './PickFightersView.css';
import CombatantCard from './CombatantCard';
import PickWinnerBtn from './PickWinnerBtn';
import GenericBtn from './GenericBtn';
import img1 from '../assets/frontend/GrinningHamster.svg';
import img2 from '../assets/frontend/HappyHamster.svg';
import DescriptionText from './DescriptionText';




const PickFightersView = ({pickWinner}) => {

	const [btnClicked, setbtnClicked] = useState(false);
	const [hamsters, setHamsters] = useState([]);
	const [error, setError] = useState('');
	const [firstHamster, setFirstHamster] = useState();
	const [secondHamster, setSecondHamster] = useState();
	const [updated, setUpdated] = useState(false);

	let query = '/battle';

	let image1 = '';
	let image2 = '';
	let hamster1 = '', hamster2='';


		if(firstHamster && secondHamster){
			query = `/battle/${firstHamster}/${secondHamster}`;
		} else if(firstHamster){
			query = `/battle/${firstHamster}`;
		} else if (secondHamster){
			query = `/battle/${secondHamster}`;
		} else{
			query = '/battle';
		}


	if(hamsters.length > 0){
		image1 = hamsters[0].imgName;
		image2 = hamsters[1].imgName;
		hamster1 = hamsters[0].id;
		hamster2 = hamsters[1].id;
	}

	let text = 'If you select only one combatant, the opponent will be randomized.'


	if(btnClicked && !updated){
		getUserHamsters();
	}

	async function getUserHamsters(){
		let userHamster1;
		let userHamster2;


		if(firstHamster && secondHamster){
			let res1 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${firstHamster}`)
			userHamster1 = await res1.json();
			
			let res2 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${secondHamster}`)
			userHamster2 = await res2.json();

			setHamsters([userHamster1, userHamster2]);
			setUpdated(true);
			setError('');

		} else if(firstHamster){
			let res1 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${firstHamster}`)
			userHamster1 = await res1.json();

			let res2 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamsters/random?count=1&excludeid=${userHamster1.id}`)
			userHamster2 = await res2.json();
			userHamster2 = userHamster2[0]

			setHamsters([userHamster1, userHamster2]);
			setUpdated(true);
			setError('');
			

		} else if (secondHamster){
			let res1 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${secondHamster}`)
			userHamster2 = await res1.json();

			let res2 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamsters/random?count=1&excludeid=${userHamster2.id}`)
			userHamster1 = await res2.json();
			userHamster1 = userHamster1[0]

			setHamsters([userHamster1, userHamster2]);
			setUpdated(true);
			setError('');

		} else {
			setbtnClicked(false);
			setError('Pick at least one hamster.');
		}

	}
	
	return (
		<div className="pickFighterArea">
			<h1 className="selectFighterH1">SELECT COMBATANTS</h1>
			<div className="selectFighter-form">
			<div>
			<div className="select-fighter-form" method="get">
				<label 
					className="select-fighter-label"
					htmlFor="select-fighter-1"
				>
					Select the first combatant:
				</label>{" "}
				<br />
				<input onChange={(e)=>setFirstHamster(e.target.value)}
					placeholder="Enter hamster ID..."
					type="text"
					id="select-fighter-1"
					name="fighter-1"
				></input>
				<br />
				<label
					className="select-fighter-label"
					htmlFor="select-fighter-2"
				>
					Select the second combatant:
				</label>{" "}
				<br />
				<input 
					onChange={(e)=>setSecondHamster(e.target.value)}
					placeholder="Enter hamster ID..."
					type="text"
					id="select-fighter-2"
					name="fighter-2"
				></input>
				<div className="description-text-desktop">
					<DescriptionText text={text} />
				</div>
			</div>

			<div className="description-text-mobile">
				<DescriptionText text={text} />
			</div>
		</div>
				<div className="choose-fightersBtn">
					<span className={ error ? 'showError' : ''}>{error}</span>
					<button onClick={() => setbtnClicked(true)}>
						<h1>choose!</h1>
					</button>
				</div>
			</div>

			<div className="desktop-view">
				<CombatantCard
					CombatantImg={image1}
					borderColor="blue"
					defaultImg={img1}
				/>

				<h1>VS.</h1>
				<CombatantCard
					CombatantImg={image2}
					borderColor="purple"
					defaultImg={img2}
				/>
			</div>
			<div>
				<div
					className={
						btnClicked !== true
							? "pickWinnerBtns " + " disable"
							: "pickWinnerBtns"
					}
				>
					<PickWinnerBtn
						winId={hamster1}
						losId={hamster2}
						pickWinner={() => pickWinner(hamster1)}
					/>
					<PickWinnerBtn
						winId={hamster2}
						losId={hamster1}
						pickWinner={() => pickWinner(hamster2)}
					/>
				</div>
			</div>

			<div className="generic-btn">
				<GenericBtn text="Battle" color="teal" link={query} />
			</div>
		</div>
	);
}

export default PickFightersView;