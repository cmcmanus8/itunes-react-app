import React from 'react';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

import './Player.scss';

const Player = ({ item, title, show, onHide, size }) => {
  return (
    <Modal
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      onHide={onHide}
      size={size}
      centered
    >
      <Modal.Header className="header">
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => onHide()} />
      </Modal.Header>
      <Modal.Body>
        <audio
          className="player-audio"
          controls
          src={item && item.previewUrl}
        >
          Your browser does not support the audio element.
        </audio>
      </Modal.Body>
    </Modal>
  )
};

export default Player;