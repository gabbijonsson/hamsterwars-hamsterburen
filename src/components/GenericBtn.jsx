import React from 'react';
import './GenericBtn.css';
import {Link} from 'react-router-dom';

const GenericBtn = ({text, color,link}) => {
    return(
		
			<button className={'generic ' + color} >
				<Link to="/result/:id">
					{text}
				</Link>
			</button>
        
    )
}

export default GenericBtn;

