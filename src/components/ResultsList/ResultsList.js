import React from 'react';
import ResultItem from '../ResultItem/ResultItem';

import './ResultsList.scss';

const ResultsList = ({ loading, onClickItem, results, noResults, error }) => {
  return (
    <div className="results-container">
      {loading ? "loading..." : (
        error ? "error getting results..." : (
          noResults ? "no results found..." : (
            <ul className="results-list">
              {(results || []).map((result) => (
                <ResultItem key={result.trackId} item={result} onClickItem={onClickItem} />
              ))}
            </ul>
          )
        )
      )}
    </div>
  )
};

export default ResultsList;



