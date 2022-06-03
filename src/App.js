import "./App.css";
import React from 'react'
import { useState } from "react";
import CharacterLoader from "./CharacterLoader";
import CharacterBoard from "./CharacterBoard";

function App() {
  const [data, setData] = useState({});

  const updateData = (stats) => {
    setData(stats)
  }

  return (
    <div className = "App">
      <h1>D&D 5E Character Sheet</h1>
      <main>
        <CharacterLoader updateData={updateData}/>
        <CharacterBoard data={data}/>
      </main>
    </div>
  );
}

export default App;
