import React from 'react';
import './GenericBtn.css';

const GenericBtn = ({text, color,functionality}) => {
    return(
        <button className={'generic ' + color} onClick={functionality}>
            {text}
        </button>
    )
}

export default GenericBtn;