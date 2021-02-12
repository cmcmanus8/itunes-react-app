import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons';

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

  console.log(resultsSize);
  const showPrev = (index > 0)
  const showNext = (index < resultsSize)

  return (
    <div className="modal-wrapper">
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        onHide={onHide}
        size="lg"
        centered
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="header">
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
          <FontAwesomeIcon icon={faTimesCircle} onClick={() => onHide()} />
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
          <button>Share</button>
        </Modal.Body>
      </Modal>
    </div>
  )
};

// cover detail, song, artist, share button, play pauase, skip previous next

export default Player;