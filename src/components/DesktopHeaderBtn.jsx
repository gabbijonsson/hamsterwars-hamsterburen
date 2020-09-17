import React from 'react';
import './DesktopHeaderBtn.css';

const DesktopHeaderBtn = ({text, color}) => {
    return(
        <button className={'generic-desktop ' + color}>
            {text}
        </button>
    )
}

export default DesktopHeaderBtn;