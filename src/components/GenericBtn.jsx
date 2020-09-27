import React from 'react';
import './GenericBtn.css';
import {Link} from 'react-router-dom';

const GenericBtn = ({text, color,link}) => {
    return(
		<Link to="/battle/:id1/:id2">
			<button className={'generic ' + color} >
				{text}	
			</button>
		</Link>
    )
}

export default GenericBtn;

