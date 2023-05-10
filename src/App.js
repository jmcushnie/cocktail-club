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
    // Fetch cocktail data from API when the component mounts
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        this.setState({ cocktails: response.data.drinks });
      });
  }

  // Event handler for search box value change
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  // Event handler for card click
  handleCardClick = (cocktail) => {
    this.setState({ selectedCocktail: cocktail });
  };

  // Event handler for back button click
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
