import React from "react";
import Card from "./components/Card";
import { useState, useCallback } from "react";
import CardList from "./CardList";

function App() {
  return (
    <div className="App">
      <h1>Cocktail club</h1>
      <div>
        <CardList />
      </div>
    </div>
  );
}

export default App;
