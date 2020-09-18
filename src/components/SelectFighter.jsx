import React from 'react'
import './SelectFighter.css'

function SelectFighter() {
	return (
		<div>
			<form className="select-fighter-form" method="get">
				<label className="select-fighter-label" htmlFor="select-fighter-1">Pick your first fighter</label> <br/>
				<input placeholder="Write hamsters name..." type="text" id="select-fighter-1" name="fighter-1"></input>
				<br/>
				<label className="select-fighter-label" htmlFor="select-fighter-2">Pick your second fighter</label> <br/>
				<input placeholder="Write hamsters name..." type="text" id="select-fighter-2" name="fighter-2"></input>
			</form>
			<div className="description-text">
				
					If you only pick one fighter, and leave the other one empty, your combatant will meet a random other fighter.
				
			</div>
		</div>
		
	)
}

export default SelectFighter
