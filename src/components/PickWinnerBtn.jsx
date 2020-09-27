import React from 'react';
import './PickWinnerBtn.css';
import {Link} from 'react-router-dom';

const PickWinnerBtn = ({pickWinner}) => {

	return(
		<Link to="/result/:id">
			<button className="pick-button" onClick={() =>  pickWinner() }><h1>Pick as winner</h1></button>
		</Link>
	)
}

export default PickWinnerBtn;