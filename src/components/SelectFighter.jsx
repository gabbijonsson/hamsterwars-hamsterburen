import React from 'react'
import './SelectFighter.css'
import DescriptionText from './DescriptionText'

function SelectFighter() {
	let text = 'If you only pick one fighter, and leave the other one empty, your combatant will meet a random other fighter.'
	return (
		<div>
			<div className="select-fighter-form" method="get">
				<label className="select-fighter-label" htmlFor="select-fighter-1">Pick your first fighter</label> <br/>
				<input placeholder="Write hamsters name..." type="text" id="select-fighter-1" name="fighter-1"></input>
				<br/>
				<label className="select-fighter-label" htmlFor="select-fighter-2">Pick your second fighter</label> <br/>
				<input placeholder="Write hamsters name..." type="text" id="select-fighter-2" name="fighter-2"></input>
				<div className="description-text-desktop">
					<DescriptionText text={text}/>
				</div>
			</div>
			
			<div className="description-text-mobile">
				
					<DescriptionText text={text}/>
				
			</div>
		</div>
		
	)
}

export default SelectFighter
