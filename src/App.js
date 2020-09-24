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

function App() {

  const STARTPAGE = 'startpage' , BATTLEPAGE = 'battlepage' , CREATEHAMSTERPAGE = 'createhamsterpage' , STATSPAGE = 'statspage' , RESULTPAGE = 'resultpage' ;

  const [screen, setScreen] = useState(STARTPAGE);
  const [winnerId, setWinnerId] = useState('');

  let content = null;
  let header = <StartHeader/>;

  if (screen !== STARTPAGE){
    header = <HeaderGeneric/>
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
	  pickWinner ={(ID) => setWinnerId(ID)} />
      break;

    case STATSPAGE:
      content = <StatisticsView total='8' />
	  break;
	  
	case RESULTPAGE:
		content = <ResultView id={winnerId}/>
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