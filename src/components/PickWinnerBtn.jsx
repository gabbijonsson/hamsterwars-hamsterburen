import React from 'react';
import { useHistory } from 'react-router-dom';
import './PickWinnerBtn.css';


const PickWinnerBtn = ({pickWinner,winId,losId}) => {
	const history = useHistory();

	const winLosId = {
		"winner": winId,
		"loser" : losId
	}
    
	
    async function addMatch() {
		const response = await fetch(" https://hamsterwars-hamsterburen.herokuapp.com/api/addmatch", {
        method:"POST",
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify(winLosId)
          })
       const result = await response.text();
	   console.log(result);
	   if(result){
		   switchToResult();
	   }
	}
	
       
	const switchToResult = ()=>{
		pickWinner();
		history.push('/result/:id');
	}
  
			
	

		
	return(
		
			<button className="pick-button" onClick={() =>  addMatch() }><h1>Pick as winner</h1></button>
	)
}

export default PickWinnerBtn;

