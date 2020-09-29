import React from 'react';
import './GenericHamster.css';
import GenericImg from '../assets/frontend/JoyfulHamster.svg';

const GenericHamster = () => {

	return(
		<div className="generic-hamster">
			<img src={GenericImg} alt="GenericHamster" />
			<p>Go to Battle page and choose your favorite hamster!</p>

		</div>
	)
}

export default GenericHamster;