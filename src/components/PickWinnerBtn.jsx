import React from 'react';
import './PickWinnerBtn.css';
import {Link} from 'react-router-dom';

const PickWinnerBtn = ({pickWinner,id}) => {

	
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
		<Link to="/result/:id">
			<button className="pick-button" onClick={() =>  {pickWinner(); addMatch();} }><h1>Pick as winner</h1></button>
		</Link>
	)
}

export default PickWinnerBtn;

// () => { f1(); f2(); }