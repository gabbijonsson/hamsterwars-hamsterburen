import React from 'react';
import './TotalNoMatches.css';

const TotalNoMatches = ({total}) => {
	return (
		<div className="total-matches">
			<p>TOTAL # OF MATCHES</p>
			<h1 className="show-total">{total}</h1>
		</div>
	);
}
 
export default TotalNoMatches;