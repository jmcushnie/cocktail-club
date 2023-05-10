import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";
import BackButton from "./components/BackButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cocktails: [],
      searchfield: "",
      selectedCocktail: null,
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

  handleCardClick = (cocktail) => {
    this.setState({ selectedCocktail: cocktail });
  };

  handleBackButtonClick = () => {
    this.setState({ selectedCocktail: null, searchfield: "" });
  };

  render() {
    const { cocktails, searchfield, selectedCocktail } = this.state;
    const filteredCocktails = cocktails.filter((cocktail) =>
      cocktail.strDrink.toLowerCase().startsWith(searchfield.toLowerCase())
    );
    console.log(filteredCocktails);

    return (
      <Router>
        <div className="App">
          <h1>Cocktail Club</h1>

          {selectedCocktail ? (
            <BackButton onClick={this.handleBackButtonClick} />
          ) : (
            <SearchBox searchChange={this.onSearchChange} />
          )}
          <Routes>
            <Route
              path="/"
              element={
                filteredCocktails.length ? (
                  <CardList
                    cocktails={filteredCocktails}
                    onCardClick={this.handleCardClick}
                  />
                ) : (
                  <p>No cocktails found</p>
                )
              }
            />
            <Route
              path="/cocktail-details"
              element={
                <CocktailDetails cocktail={this.state.selectedCocktail} />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
