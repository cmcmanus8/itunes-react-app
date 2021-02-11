import React from 'react';
import ResultItem from '../ResultItem/ResultItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

import './ResultsList.scss';

const ResultsList = ({ loading, onClickItem, results, noResults, error }) => {
  return (
    <div className="results-container">
      {loading ? (
        <FontAwesomeIcon className="loading-icon" icon={faHeadphonesAlt} />
        ) : (
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



