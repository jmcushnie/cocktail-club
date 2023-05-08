import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = () => {
  const [cocktail, setCocktail] = useState({});

  useEffect(() => {
    const fetchCocktail = async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      setCocktail(response.data.drinks[0]);
    };

    fetchCocktail();
  }, []);

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
