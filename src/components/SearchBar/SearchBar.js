import React, { memo, useState } from 'react';

import './SearchBar.scss';

const SearchBar = memo(({ onClick, onKeyDown }) => {
  const [formInput, setFormInput] = useState('');
  const [searchData, setSearchData] = useState([]);

  const handleChange = (e) => {
    setFormInput(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(formInput);

    // remove whitespace
    const searchSubmit = formInput.trim();
    setSearchData([...searchData, searchSubmit]);

    // pass to parent
    onClick(searchSubmit);
  };

  return (
    <div className="search-bar">
      <input
        id="search"
        type="search"
        value={formInput}
        onChange={handleChange}
        onKeyDown={onKeyDown}
        placeholder="Search..."
      />
      <button type="button" className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
});

export default SearchBar;