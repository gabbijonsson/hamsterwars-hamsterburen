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
  
  const [newHamster, setNewHamster] = useState();
  const createHamster = (hamster) =>{
    setNewHamster(hamster);
    console.log(hamster);
  }

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
            <Route path="/battle/:id1/:id2" >
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
              createHamster={createHamster}/>
            </Route>
            <Route path="/result/:id" exact>
              <HeaderGeneric/>
              <ResultView/>
            </Route>
            <Route path="/new-fighter-added" exact>
              <HeaderGeneric/>
              <ResultView/>
            </Route>
          </BrowserRouter>

        </div>
      
    </div>
  );
  
}

export default App;