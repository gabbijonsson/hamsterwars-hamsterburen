import React from 'react';
import './GenericBtn.css';

const GenericBtn = ({text, color}) => {
    return(
        <button className={'generic ' + color}>
            {text}
        </button>
    )
}

export default GenericBtn;