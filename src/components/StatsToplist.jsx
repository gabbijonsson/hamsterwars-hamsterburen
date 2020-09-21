import React from 'react';
import './StatsToplist.css';

const StatsToplist = ({title, children}) => {
	let header = '';
	let color = '';

	switch(title){
		case 'oldest':
		   header = 'Oldest';
		   color = 'pink'
			break;
		case 'youngest' :
		   header = 'Youngest';
           color = 'blue';
			break;
		case '%':
			header = 'Win %';
			color = 'purple';
			break;
		case 'winners':
			header = 'Top winners';
			color = 'pink';
			break;
		default :
			header = 'Top losers';
			color = 'blue'
		    break;
	}


	return(
		<div className="stats-toplist">
           <h2 className={`title text-${color}` } >{header}</h2>
		    {children}

		</div>
	)
}

export default StatsToplist;