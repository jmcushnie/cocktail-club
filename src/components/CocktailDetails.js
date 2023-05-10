import React from "react";

const CocktailDetails = ({ cocktail, searchValue }) => {
  // Check if cocktail data exists
  if (!cocktail) {
    return <div>No Cockatil found</div>;
  }

  return (
    <div className="cocktail-details">
      <img
        alt="cocktail"
        src={cocktail.strDrinkThumb}
        style={{ width: "300px", height: "300px" }}
      />
      <h2>{cocktail.strDrink}</h2>
      <h3 className="Ingredients">Ingredients:</h3>
      <ul>
        <li>
          {cocktail.strMeasure1} {cocktail.strIngredient1}
        </li>
        <li>
          {cocktail.strMeasure2} {cocktail.strIngredient2}
        </li>
        <li>
          {cocktail.strMeasure3} {cocktail.strIngredient3}
        </li>{" "}
        <li>
          {cocktail.strMeasure4} {cocktail.strIngredient4}
        </li>{" "}
        <li>
          {cocktail.strMeasure5} {cocktail.strIngredient5}
        </li>
      </ul>
      <h3>Instructions:</h3> <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;
