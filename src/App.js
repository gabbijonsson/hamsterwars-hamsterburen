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
  
  const [newHamsterID, setNewHamsterID] = useState({});

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
            <Route path="/battle/:id1/" exact >
              <HeaderGeneric/>
              <BattlePage/>
            </Route>
            <Route path="/battle/:id1/:id2" exact>
              <HeaderGeneric/>
              <BattlePage/>
            </Route>
            <Route path="/pickfighters">
              <HeaderGeneric content="pickFightersView"/>
              <PickFightersView/>
            </Route>
            <Route path="/stats" exact>
              <HeaderGeneric/>
              <StatisticsView/>
            </Route>
            <Route path="/upload" exact>
              <HeaderGeneric/>
              <CreateHamsterView 
              createHamster={(hamster) => setNewHamsterID(hamster)}/>
            </Route>
            <Route path="/result/:id" exact>
              <HeaderGeneric/>
              <ResultView/>
            </Route>
            <Route path="/new-fighter-added/" exact>
              <HeaderGeneric/>
              <ResultView newHamsterID={newHamsterID}/>
            </Route>
          </BrowserRouter>

        </div>
      
    </div>
  );
  
}

export default App;