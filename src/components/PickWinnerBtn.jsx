import React from 'react';
import { useHistory } from 'react-router-dom';
import './PickWinnerBtn.css';

const PickWinnerBtn = ({pickWinner}) => {
	const history = useHistory();

	const switchToResult = ()=>{
		pickWinner();
		history.push('/result/:id');
	}

	return(
			<button className="pick-button" onClick={() => switchToResult() }><h1>Pick as winner</h1></button>
	)
}

export default PickWinnerBtn;