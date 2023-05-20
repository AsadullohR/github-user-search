import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleSearch, query, setQuery }) => {
  return (
    <div className="searchbar-container">
      <div className="search-and-input">
        <FontAwesomeIcon className="header-icon" icon={faSearch} />
        <input
          type="text"
          name="searchedUser"
          placeholder="Search GitHub username_"
          value={query}
          onChange={(event) => {
            event.preventDefault();
            setQuery(() => event.target.value);
          }}
        />
      </div>
      <button
        type="button"
        onClick={(event) => {
          event.preventDefault();
          handleSearch(query);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
