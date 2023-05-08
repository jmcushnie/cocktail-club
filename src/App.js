import React from "react";
import Card from "./components/Card";
import { useState, useCallback } from "react";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <h1>Cocktail club</h1>
      <Card />
    </div>
  );
}

export default App;
