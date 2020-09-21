import React from 'react';
import './App.css';
import StatisticsView from './components/StatisticsView';
import StartPage from './components/StartPage';
import BattlePage from './components/BattlePage';
import img from './assets/hamsters/hamster-1.jpg';

function App() {

	const total = 8;
	
  return (
    <div className="App">
        <div className="splash-container">

       <StatisticsView total={total}/>
	   

        </div>
      
    </div>
  );
  
}

export default App;

//          <h1 className="splash-title">HELLO TEAM</h1>
//<p>Hamsterburen</p>
		   
