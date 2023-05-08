import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search-box-container">
      <input
        type="search"
        placeholder="Search Cocktails by Name"
        value={searchfield}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
