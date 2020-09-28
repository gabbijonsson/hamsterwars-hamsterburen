import React from 'react';
import './DesktopHeaderBtn.css';
import {useHistory} from 'react-router-dom';

const DesktopHeaderBtn = ({text, color,link}) => {

	const history = useHistory();

	const sendTo = (link)=> {
		history.push(link);
	}


    return(
			<button onClick={()=>sendTo(link) } className={'generic-desktop ' + color}>
				{text}
			</button>
       
    )
}

export default DesktopHeaderBtn;