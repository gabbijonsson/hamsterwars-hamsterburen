import React from 'react'
import './SelectFighter.css'
import DescriptionText from './DescriptionText'

function SelectFighter() {
	let text = 'If you select only one combatant, the opponent will be randomized.'
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
				<input
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
