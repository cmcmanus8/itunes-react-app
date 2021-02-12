import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBar.scss';

const SearchBar = ({ onClick, results }) => {
  const [formInput, setFormInput] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleSearch(formInput)
    }
  }

  const handleChange = (e) => {
    setFormInput(e.target.value);
  }

  const handleSearch = () => {
    // remove whitespace
    const searchSubmit = formInput.trim();
    setSearchData([...searchData, searchSubmit]);

    // pass to parent
    onClick(searchSubmit);
  };

  return (
    <div className={`search-container ${results && "results"}`}>
      {/* {console.log(results)} */}
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