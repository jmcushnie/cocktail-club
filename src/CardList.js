import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

const CardList = () => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const newCocktails = Array.from(
        { length: 20 },
        () => response.data.drinks[0]
      );
      setCocktails(newCocktails);
    };

    fetchData();
  }, []);

  return (
    <div className="cocktail-list">
      {cocktails.map((cocktail, index) => (
        <Card key={index} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CardList;
