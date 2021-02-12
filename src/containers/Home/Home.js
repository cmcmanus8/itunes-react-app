import React, {useState, useEffect} from "react";
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

  useEffect((currentItem, currentItemIndex) => {
    showPlayerHandler(currentItem, currentItemIndex);
  }, [currentItemIndex]);

  const handleSearchSubmit = async (searchData) => {
    setLoading(true);
    setError(false);

    try {
      // fetch song data with 50 result limit
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

  // handler for setting current item for modal display
  const handleClickItem = (item) => {
    const indexOfCurrentItem = results.map((result) => result.trackId).indexOf(item.trackId)
    setShowModal(true);
    setCurrentItem(item);
    setCurrentItemIndex(indexOfCurrentItem);
  }
  
  const hidePlayer = () => {
    setShowModal(false);
    setCurrentItem(null);
  }

  // TODO: find prettier way of carrying this out! debug with more time
  const handleNextPrev = (action, index) => {
    if (action === 'next' && index !== (results.length - 1)) {
      setCurrentItem(results[index + 1])
      setCurrentItemIndex(index + 1);
    }
    if (action === 'prev' && index !== 0) {
      setCurrentItem(results[index - 1])
      setCurrentItem(results[index - 1])
      setCurrentItemIndex(index + 1);
    }
  }

  const showPlayerHandler = (item, index) => {
    return (
      <Player
        item={item}
        index={index}
        resultsSize={results && results.length}
        title={currentItem}
        show={showModal}
        onHide={hidePlayer}
        onClick={handleNextPrev}
      />
    )
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
          />
        </div>
      </div>
      {showPlayerHandler(currentItem, currentItemIndex)}
    </>
  );
};

export default Home;
