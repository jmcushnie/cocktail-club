import React from "react";
import Card from "./Card";

const CardList = ({ cocktails }) => {
  return (
    <div className="cocktail-list">
      {cocktails &&
        cocktails.map((cocktail) => (
          <Card key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </div>
  );
};

export default CardList;
