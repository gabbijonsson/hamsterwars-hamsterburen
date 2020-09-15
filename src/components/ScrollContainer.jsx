import React from 'react';
import './ScrollContainer.css';

const ScrollContainer = ({content}) => {
    return(
        <div className={'scrollDiv ' + content}>
        </div>
    )
}

export default ScrollContainer;