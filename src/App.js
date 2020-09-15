import React from 'react';
import './App.css';
import MenuCard from './components/MenuCard';
import GenericBtn from './components/GenericBtn';
import ScrollContainer from './components/ScrollContainer';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="App">
      <body>
        <div className="splash-container">
          <UploadForm/>
        </div>
      </body>
    </div>
  );
}

export default App;

//           <h1 className="splash-title">HELLO TEAM</h1>
//<p>Hamsterburen</p>