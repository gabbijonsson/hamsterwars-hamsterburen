import React from 'react';
import './TotalNoMatches.css';

const TotalNoMatches = ({total}) => {
	return(
		<div className="total-matches">
			<h2>Total number of matches</h2>
			<h1 className="show-total">{total}</h1>

		</div>
	)
}
 
export default TotalNoMatches;