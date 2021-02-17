import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';
import SocialShare from './SocialShare';

import './Player.scss';

const Player = ({ item, show, onHide, onClick, index, resultsSize }) => {

  // amend artwork for larger display
  const imageToDisplay = item && item.artworkUrl100.slice(0, -11).concat("300x300bb.jpg");

  /* --- Handler for clicking next or prev buttons --- */
  const clickHandler = (e) => {
    onClick(e.target.id, index);
  }

  /* --- Handler for showing next or prev buttons --- */
  const showButton = (buttonId) => {
    if (buttonId === "next") {
      return index < resultsSize - 1
    }
    if (buttonId === "prev") {
      return index > 0
    }
  }

  // Setting text for social share
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
          {showButton("prev", index) ? 
            <button id="prev" className="prev-button" onClick={((e) => clickHandler(e))}>&#171;</button>
            :
            <div className="controls-blank"></div>
          }
          <audio
            className="player-audio"
            controls
            src={item && item.previewUrl}
          >
            Your browser does not support the audio element.
          </audio>
          {showButton("next", index) ? 
            <button id="next" className="next-button" onClick={((e) => clickHandler(e))}>&#187;</button>
            :
            <div className="controls-blank"></div>  
          }
        </div>
        <SocialShare shareTitle={shareTitle} item={item} size={25} />
      </Modal.Body>
    </Modal>
  )
};

export default Player;