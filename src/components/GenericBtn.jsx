import React from 'react';
import './GenericBtn.css';
import {Link} from 'react-router-dom';

const GenericBtn = ({text, color,link}) => {
 
	let defaultLink = '/';
	if(link){
		defaultLink = link;
	}
	
    return(
		<Link to={defaultLink}>
			<button className={'generic ' + color}>
				{text}	
			</button>
		</Link>
    )
}

export default GenericBtn;

