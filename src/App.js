import React, {useState} from 'react';
import './App.css';
import StartPage from './components/StartPage';
import CreateHamsterView from './components/CreateHamsterView';
import BattlePage from './components/BattlePage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StatisticsView from './components/StatisticsView';
import StartHeader from './components/StartHeader';
import HeaderGeneric from './components/HeaderGeneric';
import ResultView from './components/ResultView';
import PickFightersView from './components/PickFightersView';

function App() {

  const STARTPAGE = 'startpage' , BATTLEPAGE = 'battlepage' , CREATEHAMSTERPAGE = 'createhamsterpage' , STATSPAGE = 'statspage' , RESULTPAGE = 'resultpage' , PICKOWNPAGE = 'pickOwnFighterPage';

  const [screen, setScreen] = useState(STARTPAGE);
  const [winnerId, setWinnerId] = useState('');

  let content = null;
  let header = <StartHeader/>;

  if (screen !== STARTPAGE){
    header = <HeaderGeneric
	showHome = {()=>setScreen(STARTPAGE)}
	showBattle={()=>setScreen(BATTLEPAGE)}
	showStats={()=>setScreen(STATSPAGE)}
	showCreate={()=>setScreen(CREATEHAMSTERPAGE)}
	showOwnFighter={()=>setScreen(PICKOWNPAGE)}/>
  }

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
      showCreate={()=>setScreen(CREATEHAMSTERPAGE)}
	  showResult={()=>setScreen(RESULTPAGE)}
	  pickWinner ={(ID) => setWinnerId(ID)}
	  showOwnFighter={()=>setScreen(PICKOWNPAGE)} />
      break;

    case STATSPAGE:
      content = <StatisticsView total='8' />
	  break;
	  
	case RESULTPAGE:
		content = <ResultView
		 showBattle={()=>setScreen(BATTLEPAGE)}
		 id={winnerId}/>
		break;
	
	case PICKOWNPAGE:
		content = <PickFightersView
		showBattle={()=>setScreen(BATTLEPAGE)} />
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
        {header}
        {content}

        </div>
      
    </div>
  );
  
}

export default App;