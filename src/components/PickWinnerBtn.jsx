import React from 'react';
import './PickWinnerBtn.css';
import {Link} from 'react-router-dom';

const PickWinnerBtn = ({id}) => {

	return(
		<Link to="/battle/:yourfighter">
			<button className="pick-button"><h1>Pick as winner</h1></button>
		</Link>
	)
}

export default PickWinnerBtn;