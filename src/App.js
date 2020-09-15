import React from 'react';
import './App.css';
import HamburgerMenuBtn from './components/HamburgerMenuBtn';
import StartHeader from './components/StartHeader';
import CombatantCard from './components/CombatantCard';
import CombatantImg from './hamsterTest-1.jpg';
import PickWinnerBtn from './components/PickWinnerBtn';
import CombatantPicCard from './components/CombatantPicCard';
import CombatantInfoCard from './components/CombatantInfoCard';
import StatsToplistCombatant from './components/StatsToplistCombatant';
import StatsToplist from './components/StatsToplist';
import TotalNoMatches from './components/TotalNoMatches';
function App() {
 
	let hamster = {_id:0, name:'Sweetie', age: 2 , loves:'To run', food: 'Pasta', wins: 1, games: 5, losts:4};

  return (
    <div className="App">
		
      
        <div className="splash-container">
          <h1 className="splash-title">HELLO TEAM</h1>
          <p>Hamsterburen</p>
		   

        </div>
      
    </div>
  );
}

export default App;
