import React from 'react';
import './GenericBtn.css';
import {Link} from 'react-router-dom';

const GenericBtn = ({text, color}) => {
    return(
		<Link to="/battle/own">
			<button className={'generic ' + color} >
				{text}	
			</button>
		</Link>
    )
}

export default GenericBtn;

