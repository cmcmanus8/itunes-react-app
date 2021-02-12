import React, { useCallback, useState } from 'react';
import dateFormat from 'dateformat';

import './ResultItem.scss';

/* each result should show:
  Song Title: trackName
  Artist: artistName
  Album Title: collectionCensoredName
  Release Date: releaseDate
  Cover Thumbnail: artworkUrl100
  Song Length: trackTimeMillis
  Genre: primaryGenreName
  Price: trackPrice
*/
const ResultItem = ({ item, onClickItem }) => {
  const [moreDetails, setMoreDetails] = useState(false);

  const handleClick = useCallback(() => {
    onClickItem(item);
  }, [onClickItem, item]);

  const handleMoreDetails = () => {
    setMoreDetails(!moreDetails);
  }

  const dateToDisplay = dateFormat(Date.parse(item.releaseDate), "yyyy");
  const songLength = (lengthInMs) => {
    const mins = Math.floor(lengthInMs / 60000);
    const secs = ((lengthInMs % 60000) / 1000).toFixed(0);
    return `${mins}:${secs < 10 ? '0':''}${secs}`;
  }
  // amend artwork for larger display
  const imageToDisplay = item.artworkUrl100.slice(0, -11).concat("150x150bb.jpg");

  return (
    <li className="list-item" key={item.trackId}>
      <div className="cover-thumbnail" onClick={handleClick}><img src={imageToDisplay} alt={item.trackname} /></div>
      <div className="item-details">
        <div className="song-title" onClick={handleClick}>{item.trackName}</div>
        <div className="artist">{item.artistName}</div>
        {moreDetails && (
          <div className="more-details-wrapper">
            <div className="album-release">{item.collectionCensoredName} ({dateToDisplay})</div>
            <div className="song-length">Duration: <strong>{songLength(item.trackTimeMillis)}</strong></div>
            <div className="genre">Genre: <strong>{item.primaryGenreName}</strong></div>
            <div className="track-price">£ {item.trackPrice > 0 ? `${item.trackPrice}` : 'unavailable'}</div>
          </div>
        )}
        <button className="more-details" onClick={handleMoreDetails}>{moreDetails ? 'Less details' : 'More details'}</button>
      </div>
    </li>
  );
};

export default ResultItem;
