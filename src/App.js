import React from 'react';
import './App.css';
import Hamsterburen from './components/HamburgerMenuBtn';
import HamburgerMenu from './components/HamburgerMenu';

function App() {
  return (
    <div className="App">
      
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p>
		  <Hamsterburen />
		  <HamburgerMenu />
        </div>
      
    </div>
  );
}

export default App;
