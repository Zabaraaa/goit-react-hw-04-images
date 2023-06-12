import { Component } from 'react';
import { Overlay, Modal } from './Modal.styled';
import { useEffect } from "react";
import PropTypes from 'prop-types'

export default function ModalOverlay({ onClick, largeImageURL }) {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClick();
    }
  }
  useEffect(() => {
    
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      } 
    })


  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  
  return (
      <Overlay onClick={handleClick}>
        <Modal>
          <img src={largeImageURL} alt="" />
        </Modal>
      </Overlay>
    );
}


ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};