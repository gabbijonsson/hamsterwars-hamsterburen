import React from 'react';
import './App.css';
import HamburgerMenuBtn from './components/HamburgerMenuBtn';
import StartHeader from './components/StartHeader';
import CombatantCard from './components/CombatantCard';
import CombatantImg from './hamsterTest-1.jpg';

function App() {


  return (
    <div className="App">
      
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p> 
		  
		   {/* <HamburgerMenuBtn />
		  <StartHeader /> */}
		  <CombatantCard CombatantImg={CombatantImg} borderColor='blue' />
		  
        </div>
      
    </div>
  );
}

export default App;
