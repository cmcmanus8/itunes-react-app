import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import { 
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

import './Player.scss';

const Player = ({ item, show, onHide, onClick, index, resultsSize }) => {

  // amend artwork for larger display
  const imageToDisplay = item && item.artworkUrl100.slice(0, -11).concat("300x300bb.jpg");

  const nextHandler = () => {
    onClick("next", index);
  }

  const prevHandler = () => {
    onClick("prev", index);
  }

  const showPrev = (index > 0)
  const showNext = (index < resultsSize)

  const shareTitle = "Check what I'm listening to!";

  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      onHide={onHide}
      centered
      backdrop="static"
      keyboard={false}
      className="modal-custom"
    >
      <Modal.Header className="header">
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        <FontAwesomeIcon className="close-icon" icon={faTimesCircle} onClick={() => onHide()} />
      </Modal.Header>
      <Modal.Body>
        <div className="modal-details">
          {!imageToDisplay ?  (
          <FontAwesomeIcon className="loading-icon" icon={faHeadphonesAlt} />
          ) : (
            <img className="modal-image" src={imageToDisplay} alt={item && item.artistName} />
          )}
          <div className="modal-song-title">{item && item.trackName}</div>
          <div className="modal-artist">{item && item.artistName}</div>
        </div>
        <div className="audio-controls">
          {showPrev && <button className="prev-button" onClick={prevHandler}>&#171;</button>}
          <audio
            className="player-audio"
            controls
            src={item && item.previewUrl}
          >
            Your browser does not support the audio element.
          </audio>
          {showNext && <button className="next-button" onClick={nextHandler}>&#187;</button>}
        </div>
        <div className="share-wrapper">
          <FacebookShareButton
            quote={shareTitle}
            url={item && item.trackViewUrl}
          >
            <FacebookIcon size={25} round />
          </FacebookShareButton>
          <RedditShareButton
            title={shareTitle}
            url={item && item.trackViewUrl}
          >
            <RedditIcon  size={25} round />
          </RedditShareButton>
          <TwitterShareButton
            title={shareTitle}
            url={item && item.trackViewUrl}
          >
            <TwitterIcon  size={25} round />
          </TwitterShareButton>
          <WhatsappShareButton
            title={shareTitle}
            url={item && item.trackViewUrl}
          >
            <WhatsappIcon  size={25} round />
          </WhatsappShareButton>
        </div>
      </Modal.Body>
    </Modal>
  )
};

export default Player;