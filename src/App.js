import React from 'react';
import './App.css';
import MenuCard from './components/MenuCard';

function App() {
  return (
    <div className="App">
      <body>
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p>
          <MenuCard color={'pink'} title={'add your hamsters'}/>
        </div>
      </body>
    </div>
  );
}

export default App;
