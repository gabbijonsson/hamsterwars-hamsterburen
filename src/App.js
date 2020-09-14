import React from 'react';
import './App.css';
import HeaderGeneric from './components/HeaderGeneric'
import SelectFighter from './components/SelectFighter'

function App() {
  let testmode = true
  if(!testmode)
  return (
    <div className="App">
      <HeaderGeneric/>
      <body>
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p>
        </div>
      </body>
    </div>
  );
  else
  return (
    <div>
      <HeaderGeneric/>
      <SelectFighter/>
    </div>
  )
}

export default App;
