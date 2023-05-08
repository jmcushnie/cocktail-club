import React from "react";
import Card from "./components/Card";
import CardList from "./CardList";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <h1>Cocktail club</h1>
      <div>
        <SearchBox />
        <CardList />
      </div>
    </div>
  );
}

export default App;
