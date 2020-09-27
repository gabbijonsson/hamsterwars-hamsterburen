import React, {useState} from 'react';
import './App.css';
import StartPage from './components/StartPage';
import CreateHamsterView from './components/CreateHamsterView';
import BattlePage from './components/BattlePage';
import StatisticsView from './components/StatisticsView';
import StartHeader from './components/StartHeader';
import HeaderGeneric from './components/HeaderGeneric';
import ResultView from './components/ResultView';
import PickFightersView from './components/PickFightersView';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <div className="splash-container">
          <BrowserRouter>
            <Route path="/" exact>
              <StartHeader/>
              <StartPage/>
            </Route>
            <Route path="/battle" exact>
              <HeaderGeneric/>
              <BattlePage/>
            </Route>
            <Route path="/stats" exact>
              <HeaderGeneric/>
              <StatisticsView/>
            </Route>
            <Route path="/upload" exact>
              <HeaderGeneric/>
              <CreateHamsterView/>
            </Route>
			<Route path="/result/:id" exact>
              <HeaderGeneric/>
              <ResultView/>
            </Route>
			<Route path="/battle/:yourfighter" exact>
              <HeaderGeneric/>
              <PickFightersView/>
            </Route>
          </BrowserRouter>

        </div>
      
    </div>
  );
  
}

export default App;