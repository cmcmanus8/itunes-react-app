import React, { useCallback } from 'react';
// import { };

import './ResultItem.scss';

const ResultItem = ({ item, onClickItem }) => {

  const handleClick = useCallback(() => {
    onClickItem(item);
  }, [onClickItem, item]);

  return (
    <li className="list-item" key={item.trackId} onClick={handleClick}>
      <p className="artist-name">{item.artistName}</p>
      <p className="track-name">{item.trackName}</p>
    </li>
  );
};

export default ResultItem;
