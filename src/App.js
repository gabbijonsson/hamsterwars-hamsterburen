import React, {useState} from 'react';
import './App.css';
import StartPage from './components/StartPage';
import CreateHamsterView from './components/CreateHamsterView';
import BattlePage from './components/BattlePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {

  const STARTPAGE = 'startpage' , BATTLEPAGE = 'battlepage' , CREATEHAMSTERPAGE = 'createhamsterpage' , STATSPAGE = 'statspage' ;

  const [screen, setScreen] = useState(STARTPAGE);

  let content = null;

  switch (screen){

    case CREATEHAMSTERPAGE:
      content = <CreateHamsterView
      showBattle={()=>setScreen(BATTLEPAGE)}
      showStats={()=>setScreen(STATSPAGE)}
      showCreate={()=>setScreen(CREATEHAMSTERPAGE)}/>
      break;

    case BATTLEPAGE:
      content = <BattlePage
      showBattle={()=>setScreen(BATTLEPAGE)}
      showStats={()=>setScreen(STATSPAGE)}
      showCreate={()=>setScreen(CREATEHAMSTERPAGE)}/>
      break;

    case STATSPAGE:
      content = null
       //Lägg till statsview här istället när klar
      break;

    default:
      content = <StartPage
      showBattle={()=>setScreen(BATTLEPAGE)}
      showStats={()=>setScreen(STATSPAGE)}
      showCreate={()=>setScreen(CREATEHAMSTERPAGE)}/>
  }

  return (
    <div className="App">
        <div className="splash-container">

        {content}

        </div>
      
    </div>
  );
  
}

export default App;

//          <h1 className="splash-title">HELLO TEAM</h1>
//<p>Hamsterburen</p>
		   
