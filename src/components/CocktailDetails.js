import React from "react";

const CocktailDetails = ({ cocktail }) => {
  if (!cocktail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cocktail-details">
      <h2>{cocktail.strDrink}</h2>
      <p>
        Ingredients: {cocktail.strIngredient1}, {cocktail.strIngredient2}, ...
      </p>
      <p>Instructions: {cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;
