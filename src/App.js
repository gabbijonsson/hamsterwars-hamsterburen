import React from 'react';
import './App.css';
import './components/StartPage';
import StartPage from './components/StartPage';
import BattlePage from './components/BattlePage';
import hamster1 from './assets/hamsters/hamster-1.jpg';

function App() {

  return (
    <div className="App">
        
        <div className="splash-container">
          
          {/* <h1 className="splash-title">HELLO TEAM</h1> */}
          {/* <p>Hamsterburen</p> */}
		   
          

		  <BattlePage img1={hamster1} img2={hamster1} />

        </div>
      
    </div>
  );
  
}

export default App;