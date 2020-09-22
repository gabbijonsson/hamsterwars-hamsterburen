import React from 'react';
import './MenuCard.css';

const MenuCard = ({color, text, img, showPage}) => {
    return(
        <article onClick={()=>showPage()} className={'menuCard ' + color}>
			<img src={img} alt='battle' />
            <h2>{text}</h2>
        </article>
    )
}

export default MenuCard;