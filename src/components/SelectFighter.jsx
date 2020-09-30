import React, { useEffect, useState } from 'react'
import './SelectFighter.css'
import DescriptionText from './DescriptionText'

function SelectFighter({setHamsters, btnClicked}) {
	let text = 'If you select only one combatant, the opponent will be randomized.'
	const [firstHamster, setFirstHamster] = useState();
	const [secondHamster, setSecondHamster] = useState();
	const [updated, setUpdated] = useState(false);

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

		} else if(firstHamster){
			let res1 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${firstHamster}`)
			userHamster1 = await res1.json();

			let res2 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamsters/random?count=1&excludeid=${userHamster1.id}`)
			userHamster2 = await res2.json();
			userHamster2 = userHamster2[0]

			setHamsters([userHamster1, userHamster2]);
			setUpdated(true);

		} else if (secondHamster){
			let res1 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamster?id=${secondHamster}`)
			userHamster2 = await res1.json();

			let res2 = await fetch(`https://hamsterwars-hamsterburen.herokuapp.com/api/gethamsters/random?count=1&excludeid=${userHamster2.id}`)
			userHamster1 = await res2.json();
			userHamster1 = userHamster1[0]

			setHamsters([userHamster1, userHamster2]);
			setUpdated(true);

		}

	}

	return (
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
	);
}

export default SelectFighter
