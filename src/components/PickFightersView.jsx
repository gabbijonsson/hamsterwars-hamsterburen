import React,{useState} from 'react';
import './PickFightersView.css';
import CombatantCard from './CombatantCard';
import PickWinnerBtn from './PickWinnerBtn';
import SelectFighter from './SelectFighter';
import GenericBtn from './GenericBtn';
import img1 from '../assets/frontend/GrinningHamster.svg';
import img2 from '../assets/frontend/HappyHamster.svg';





const PickFightersView = ({pickWinner}) => {

	const [btnClicked, setbtnClicked] = useState(false);
	const [hamsters, setHamsters] = useState([]);

	let image1 = '';
	let image2 = '';
	let hamster1 = '', hamster2='';

	if(hamsters.length > 0){
		image1 = hamsters[0].imgName;
		image2 = hamsters[1].imgName;
		hamster1 = hamsters[0].id;
		hamster2 = hamsters[1].id;
	}
	
	return (
		<div className="pickFighterArea">
			<h1 className="selectFighterH1">SELECT COMBATANTS</h1>
			<div className="selectFighter-form">
				<SelectFighter 
				setHamsters={(hamsters)=>setHamsters(hamsters)} 
				btnClicked={btnClicked} />
				<div className="choose-fightersBtn">
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
				<GenericBtn text="Battle" color="teal" link="/battle" />
			</div>
		</div>
	);
}

export default PickFightersView;