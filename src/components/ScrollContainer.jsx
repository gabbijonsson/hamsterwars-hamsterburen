import React from 'react';
import './ScrollContainer.css';
import CombatantInfoCard from './CombatantInfoCard'

const ScrollContainer = ({content}) => {
    const hamster = [
		{
			name:"Sixten",
			age:1,
			favFood:"ostbollar",
			loves:"Running that wheeeeeeeeeeeeeeeel!",
			imgName:"hamster-1.jpg",
			wins:0,
			defeats:0,
			games:0
		}

	]
    return(
        <div className={'scrollDiv ' + content}>
            <CombatantInfoCard hamster={hamster}/>
        </div>
    )
}

export default ScrollContainer;