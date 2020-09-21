import React from 'react';
import './ScrollContainer.css';
import CombatantInfoCard from './CombatantInfoCard'

const ScrollContainer = ({content,children}) => {
    
    return(
        <div className={'scrollDiv ' + content}>
			
			{children}
            
		</div>
		
    )
}

export default ScrollContainer;