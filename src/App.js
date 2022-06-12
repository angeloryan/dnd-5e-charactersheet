import './App.css';
import React from 'react';
import {useState} from 'react';
import DemographicTable from './DemographicTable.js';
import CharacterLoader from './CharacterLoader.js';

function App() {
  const [characterStats, setCharacterStats] = useState({});

  const updateCharacterStats = (stats) => {
    setCharacterStats(stats);
  };

  return (
    <div className = "App">
      <h1>D&D 5E Character Sheet</h1>
      <main>
        <CharacterLoader updateCharacterStats={updateCharacterStats}/>
        <DemographicTable characterStats={characterStats}/>
      </main>
    </div>
  );
}

export default App;
