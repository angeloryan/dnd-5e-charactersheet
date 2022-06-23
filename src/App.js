import './App.css';
import React from 'react';
import {useState} from 'react';
import DemographicData from './DemographicData.js';
import CharacterLoader from './CharacterLoader.js';
import LevelUp from './LevelUp.js';
import ScoresAndModifiers from './ScoresAndModifiers';

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
        <DemographicData characterStats={characterStats}/>
        <ScoresAndModifiers characterStats={characterStats}/>
        <LevelUp characterStats={characterStats} updateCharacterStats={updateCharacterStats}/>
      </main>
    </div>
  );
}

export default App;
