import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = (selectedCocktail) => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    // Navigate to the home page
    navigate("/");
    // Reload the page to reset the search and display all cocktails
    window.location.reload();
  };

  return (
    <div className="button-container">
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
    </div>
  );
};

export default BackButton;
