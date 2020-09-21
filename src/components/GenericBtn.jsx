import React from 'react';
import './GenericBtn.css';

const GenericBtn = ({text, color, page}) => {
    return(
        <button className={'generic ' + color + ' ' + page}>
            {text}
        </button>
    )
}

export default GenericBtn;