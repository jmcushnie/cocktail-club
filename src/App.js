import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        this.setState({ cocktails: response.data.drinks });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { cocktails, searchfield } = this.state;
    const filteredCocktails = cocktails.filter((cocktail) =>
      cocktail.strDrink.toLowerCase().startsWith(searchfield.toLowerCase())
    );
    console.log(filteredCocktails);
    return (
      <div className="App">
        <h1>Cocktail Club</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cocktails={filteredCocktails} />
      </div>
    );
  }
}

export default App;
