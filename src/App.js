import React from "react";
import NasaGrid from "./components/NasaGrid";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Planets</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <NasaGrid />
    </div>
  );
}

export default App;
