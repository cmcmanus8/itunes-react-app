import React, {useState, useEffect} from "react";
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from '../../components/ResultsList/ResultsList';

const Home = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // useEffect(() => {
  //   results && showResults(results);
  // }, [results]);

  // const getResults = async (searchData) => {
  //   try {
  //     console.log(searchData);
  //     const { data } = await axios.get(`https://itunes.apple.com/search?term=${searchData}&limit=50&entity=song`);

  //     console.log(data);
  //     setResults(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('searchData', searchData);
  //   getResults(searchData);
  // }

  // const handleChange = (e) => {
  //   setSearchData(e.target.value);
  //   localStorage.setItem('searchData', e.target.value);
  //   // getResults(e.target.value);
  // }

  // const showResults = (results) => (
  //   <div>
  //     {results && "Results"}
  //   </div>
  //   )

  const handleSearchSubmit = async (searchData) => {
    setLoading(true);
    setError(false);

    try {
      const { data } = await axios.get(`https://itunes.apple.com/search?term=${searchData}&limit=50&entity=song`);
      console.log(data);

      if (data.resultCount === 0) {
        setNoResults(true)
      } else {
        setNoResults(false);
        setResults(data.results);
        console.log(data.results);
      }

    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const handleClickItem = (item) => {
    setCurrentItem(item);
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <SearchBar onClick={handleSearchSubmit} />
        <ResultsList
          results={results}
          onClickItem={handleClickItem}
          loading={loading} 
          noResults={noResults}
          error={error}
        />
      </div>
    </div>
  );
};

export default Home;
