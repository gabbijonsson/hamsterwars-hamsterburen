import React from 'react';
import './ScrollContainer.css';


const ScrollContainer = ({content,children}) => {	
    return(
        <div className={'scrollDiv ' + content}>
            {children}
        </div>
    )
}

export default ScrollContainer;