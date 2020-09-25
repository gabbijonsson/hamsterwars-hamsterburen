import React from 'react';
import './DesktopHeaderBtn.css';

const DesktopHeaderBtn = ({text, color,functionality}) => {
    return(
        <button className={'generic-desktop ' + color} onClick={functionality}>
            {text}
        </button>
    )
}

export default DesktopHeaderBtn;