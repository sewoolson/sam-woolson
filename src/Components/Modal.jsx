import React from 'react';
import { useTheme } from '../common/ThemeContext'; // use YOUR context, not MUI's

function Modal({ isOpen, onClose, image, title, date, description, githubLink }) {
  if (!isOpen) return null;

  const { theme } = useTheme(); // Now it reacts to theme changes

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
      backgroundColor: theme === 'light' ? '#fff' : '#222',
      color: theme === 'light' ? '#000' : '#fff',
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

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeBtn}>×</button>
        <img src={image} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Modal;
