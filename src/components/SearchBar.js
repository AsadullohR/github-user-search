import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleSearch, query, setQuery }) => {
  const inputReference = useRef(null);

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSearch(query);
      setQuery("");
    }
  };

  return (
    <form onSubmit={handleKeypress}>
      <div className="searchbar-container">
        <div className="search-and-input">
          <FontAwesomeIcon className="header-icon" icon={faSearch} size="lg" />
          <input
            type="text"
            name="searchedUser"
            ref={inputReference}
            placeholder="Search GitHub username_"
            className="search-input"
            value={query}
            onChange={(event) => {
              event.preventDefault();
              setQuery(() => event.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handleSearch(query);
            setQuery("");
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
