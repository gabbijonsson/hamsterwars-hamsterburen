import React from 'react';
import './App.css';
import HeaderGeneric from './components/HeaderGeneric';
import ResultView from './components/ResultView'

function App() {
  let testMode = true;
  if(testMode){
    return(
    <div className="App">
      <HeaderGeneric/>
      <ResultView/>
    </div>
    )
  }
  else return (
    <div className="App">
        <HeaderGeneric/>
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p>
        </div>      
    </div>
  );
  
}

export default App;