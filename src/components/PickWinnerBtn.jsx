import React from 'react';
import './PickWinnerBtn.css';

const PickWinnerBtn = ({pickWinner,showResult}) => {

	// const PickWinnerFunction = () => {
	// 	pickWinner
	// 	showResult
        
	// }
	return(
		<div>
			<button className="pick-button" onClick={() => { pickWinner(); showResult(); }}><h1>Pick as winner</h1></button>
		</div>
	)
}

export default PickWinnerBtn;