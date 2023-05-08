import React from "react";

const Card = ({ cocktail }) => {
  return (
    <div className="cocktail-card">
      <img
        alt="cocktail"
        src={cocktail.strDrinkThumb}
        style={{ width: "150px", height: "150px" }}
      />
      <h2>{cocktail.strDrink}</h2>
    </div>
  );
};

export default Card;
