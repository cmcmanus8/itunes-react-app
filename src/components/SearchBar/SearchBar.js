import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.scss';

/* Search Bar Component */

const SearchBar = ({ onClick, results }) => {
  const [formInput, setFormInput] = useState('');

  /* --- Handler for pressing enter --- */
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSearch(formInput)
    }
  }

  /* --- onChange handler --- */
  const handleChange = (e) => {
    setFormInput(e.target.value);
  }

  /* --- Handler for submitting search form --- */
  const handleSearch = () => {
    const searchSubmit = formInput.trim(); // remove whitespace
    onClick(searchSubmit);
  };

  return (
    <div className={`search-container ${results && "results"}`}>
      <input
        id="search"
        type="search"
        value={formInput}
        onChange={handleChange}
        placeholder="Search iTunes..."
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="search-button" onClick={handleSearch}>
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;