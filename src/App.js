import React from 'react';
import './App.css';
import './components/StartPage';
import PickFightersView from './components/PickFightersView';

import hamster1 from './assets/hamsters/hamster-1.jpg';

function App() {

  return (
    <div className="App">
        
        <div className="splash-container">
          
          {/* <h1 className="splash-title">HELLO TEAM</h1> */}
          {/* <p>Hamsterburen</p> */}
		   
         <PickFightersView img1={hamster1} img2={hamster1} />

		 
        </div>
      
    </div>
  );
  
}

export default App;