import React from 'react';
import { useHistory } from 'react-router-dom';
import './PickWinnerBtn.css';


const PickWinnerBtn = ({pickWinner,pickLoser,winId,losId}) => {
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
       const result = await response.json();
	   if(result){
		   let matchId = result.match.matchID
		   switchToResult(matchId);
	   }
	}
	
       
	const switchToResult = (matchID) =>{
		pickWinner();
		pickLoser();
		history.push(`/result/${matchID}`);
	}
  
			
	

		
	return(
		
			<button className="pick-button" onClick={() =>  addMatch() }><h1>Pick as winner</h1></button>
	)
}

export default PickWinnerBtn;

