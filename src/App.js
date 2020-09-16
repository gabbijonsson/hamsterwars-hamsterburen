import React from 'react';
import './App.css';
import './components/StartPage';
import StartPage from './components/StartPage';

function App() {

  return (
    <div className="App">
		
      
        <div className="splash-container">
          
          {/* <h1 className="splash-title">HELLO TEAM</h1> */}
          {/* <p>Hamsterburen</p> */}
		   
          <StartPage />

        </div>
      
    </div>
  );
}

export default App;