import React from 'react';
import './GenericHamster.css';


const GenericHamster = ({GenericImg}) => {

	return(
		<div className="generic-hamster">
			<img src={GenericImg} alt="GenericHamster" />
			<h2>I will be replaced by your chosen hamster</h2>

		</div>
	)
}

export default GenericHamster;