import './App.css';
import React from 'react'
import DemographicTable from './DemographicTable.js';
import CharacterLoader from './CharacterLoader.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className = "App">
        <h1>D&D 5E Character Sheet</h1>
        <main>
          <CharacterLoader/>
          <DemographicTable/>
        </main>
      </div>
    );
  }
}

export default App;
