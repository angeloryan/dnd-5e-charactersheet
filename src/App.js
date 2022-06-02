import "./App.css";
import React from 'react'
import { useState } from "react";
import StatsDisplay from "./StatsDisplay";

function App() {
  const [data, setData] = useState({});

  const updateData = (stats) => {
    setData(stats)
  }

  return (
    <div className = "App">
      <h1>D&D 5E Character Sheet</h1>
      <main>
        <StatsDisplay updateData = {updateData}/>
      </main>
    </div>
  );
}

export default App;
