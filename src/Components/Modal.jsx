// src/components/Modal.jsx
import { colors, useTheme } from '@mui/material';
import React from 'react';

function Modal({ isOpen, onClose, image, title, date, description, githubLink }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <img src={image} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View Code on GitHub
        </a>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
  backgroundColor: 'var(--modal-bg-color)',
  color: 'var(--modal-text-color)',
  padding: '2rem',
  borderRadius: '10px',
  maxWidth: '500px',
  width: '90%',
  boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  textAlign: 'center',
  position: 'relative',
},
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    borderRadius: '6px',
    marginBottom: '1rem',
  }
};

export default Modal;
