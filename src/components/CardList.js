import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const CardList = ({ cocktails, onCardClick }) => {
  return (
    <div className="cocktail-list">
      {cocktails && // Check if cocktails array exists and has elements
        cocktails.map((cocktail) => (
          <Link
            to="/cocktail-details"
            key={cocktail.idDrink}
            onClick={() => onCardClick(cocktail)}
          >
            <Card cocktail={cocktail} />
          </Link>
        ))}
    </div>
  );
};

export default CardList;
