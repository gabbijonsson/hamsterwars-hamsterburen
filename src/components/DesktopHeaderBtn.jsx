import React from 'react';
import './DesktopHeaderBtn.css';
import {Link} from 'react-router-dom';

const DesktopHeaderBtn = ({text, color,link}) => {

	let defaultLink = '/';
	if(link){
		defaultLink = link;
	}
    return(
		<Link to={defaultLink}>
			<button className={'generic-desktop ' + color}>
				{text}
			</button>
		</Link>
       
    )
}

export default DesktopHeaderBtn;