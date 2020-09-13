import React from 'react';
import './App.css';
import HamburgerMenuBtn from './components/HamburgerMenuBtn';
import StartHeader from './components/StartHeader';


function App() {
  return (
    <div className="App">
      
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p> 
		  
		   <HamburgerMenuBtn />
		  <StartHeader />
		  
        </div>
      
    </div>
  );
}

export default App;
