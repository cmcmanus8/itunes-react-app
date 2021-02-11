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

/* artistId: 104063
artistName: "Jackson 5"
artistViewUrl: "https://music.apple.com/us/artist/jackson-5/104063?uo=4"
artworkUrl30: "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/30x30bb.jpg"
artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/60x60bb.jpg"
artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/14/25/bd/1425bdc9-ff7a-1322-8a02-9090e5bcef63/source/100x100bb.jpg"
collectionCensoredName: "The Ultimate Collection"
collectionExplicitness: "notExplicit"
collectionId: 1440912101
collectionName: "The Ultimate Collection"
collectionPrice: 10.99
collectionViewUrl: "https://music.apple.com/us/album/i-want-you-back/1440912101?i=1440912105&uo=4"
country: "USA"
currency: "USD"
discCount: 1
discNumber: 1
isStreamable: true
kind: "song"
previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/50/7c/82/507c821d-c7dc-b3af-b80a-0545038fea24/mzaf_472349834907186212.plus.aac.p.m4a"
primaryGenreName: "Pop"
releaseDate: "1969-10-07T12:00:00Z"
trackCensoredName: "I Want You Back"
trackCount: 21
trackExplicitness: "notExplicit"
trackId: 1440912105
trackName: "I Want You Back"
trackNumber: 1
trackPrice: 1.29
trackTimeMillis: 178933
trackViewUrl: "https://music.apple.com/us/album/i-want-you-back/1440912101?i=1440912105&uo=4"
wrapperType: "track" */
