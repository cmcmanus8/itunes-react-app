import React, {useState} from "react";
import axios from 'axios';

import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from '../../components/ResultsList/ResultsList';
import Player from "../../components/Player/Player";

import './Home.scss';

const Home = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  /* --- Handler for search entered --- */
  const handleSearchSubmit = async (searchData) => {
    setLoading(true);
    setError(false);

    try {
      // fetch songs from itunes api with 50 result limit
      const { data } = await axios.get(`https://itunes.apple.com/search?term=${searchData}&limit=50&entity=song`);

      if (data.resultCount === 0) {
        setNoResults(true)
      } else {
        setNoResults(false);
        setResults(data.results);
      }

    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  /* --- Handler for clicking item and setting show Player Modal --- */
  const handleClickItem = (item) => {
    const indexOfCurrentItem = results.map((result) => result.trackId).indexOf(item.trackId)
    setShowModal(true);
    setCurrentItem(item);
    setCurrentItemIndex(indexOfCurrentItem);
  }

  /* --- Handle hiding Player Modal --- */
  const handleHidePlayer = () => {
    setShowModal(false);
    setCurrentItem(null);
    setCurrentItemIndex(null);
  }

  /* --- Handle skipping or going back songs --- */
  // TODO: find prettier way of carrying this out!
  const handleNextPrev = (action, index) => {
    if (action === 'next' && index !== (results.length - 1)) {
      setCurrentItem(results[index + 1])
      setCurrentItemIndex(index + 1);
    }
    if (action === 'prev' && index !== 0) {
      setCurrentItem(results[index - 1])
      setCurrentItemIndex(index - 1);
    }
  }

  /* --- Handle show Player Modal --- */
  const handleShowPlayer = (item, index) => {
    return (
      <Player
        item={item}
        index={index}
        resultsSize={results && results.length}
        title={currentItem}
        show={showModal}
        onHide={handleHidePlayer}
        onClick={handleNextPrev}
      />
    )
  }

  /* --- Handle sorting songs by given type --- */
  const handleSort = (type) => {
    const types = {
      duration: 'trackTimeMillis',
      genre: 'primaryGenreName',
      price: 'trackPrice'
    }
    const sortProperty = types[type];
    const sorted = results && ([...results].sort((a,b) => b[sortProperty] - a[sortProperty]));
    setResults(sorted);
  }

  return (
    <>
      <div className={`page-container ${results && "results-shown"}`}>
        <div className="page-content">
          <SearchBar onClick={handleSearchSubmit} className="search-bar" results={results} />
          <ResultsList
            results={results}
            onClickItem={handleClickItem}
            loading={loading} 
            noResults={noResults}
            error={error}
            handleSort={handleSort}
          />
        </div>
      </div>
      {handleShowPlayer(currentItem, currentItemIndex)}
    </>
  );
};

export default Home;
