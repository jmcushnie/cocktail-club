import React from "react";
import { Link } from "react-router-dom";

const Card = ({ cocktail, onClick }) => {
  return (
    <Link to="/cocktail-details">
      <div className="cocktail-card" onClick={onClick}>
        <img
          alt="cocktail"
          src={cocktail.strDrinkThumb}
          style={{ width: "150px", height: "150px" }}
        />
        <h2>{cocktail.strDrink}</h2>
      </div>
    </Link>
  );
};

export default Card;
