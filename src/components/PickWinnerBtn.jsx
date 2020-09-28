import React from 'react';
import { useHistory } from 'react-router-dom';
import './PickWinnerBtn.css';


const PickWinnerBtn = ({pickWinner,id}) => {
	const history = useHistory();

	const switchToResult = ()=>{
		pickWinner();
		history.push('/result/:id');
	}

	
    async function addMatch() {
		const response = await fetch(" https://hamsterwars-hamsterburen.herokuapp.com/api/addmatch", {
        method:"POST",
        headers: {
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({id})
          })
       const result = await response.text();
       console.log(result);
	}
	
       
       
  
			
	

		
	return(
		
			<button className="pick-button" onClick={() => {pickWinner(); addMatch();switchToResult()} }><h1>Pick as winner</h1></button>
	)
}

export default PickWinnerBtn;

// () => { f1(); f2(); }