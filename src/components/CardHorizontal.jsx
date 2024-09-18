import React, { useState } from 'react';

const CardHorizontal = ({ text, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.cardContainer,
        backgroundColor: '#FFFFFF',
      }}
      className='shadow-xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.textContainer}>
        <p style={styles.text}>
          {text}
        </p>
      </div>

      <div
        style={{
          ...styles.overlay,
          opacity: isHovered ? 1 : 0,
          backdropFilter: isHovered ? 'blur(5px)' : 'blur(0px)',
        }}
        className='flex flex-col items-center justify-center gap-y-5'
      >
        <p style={styles.overlayText}>{hoverText}</p>
        <p style={styles.overlayText} className='underline w-2/3'>{text}</p>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    position: 'relative',
    width: '600px',
    height: '400px',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s ease', // Transición suave para todo el contenedor
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: '35px',
    fontWeight: '300',
    color: "#FF7E1D",
    margin: '0px 0px 0px 20px',
    width: "75%",
    zIndex: 1,
    transition: 'opacity 0.4s ease', // Suavizar la transición del texto
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Fondo con menos transparencia
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    borderRadius: '12px',
    margin: "0px 0px 0px 30px",
    zIndex: 2,
    transition: 'opacity 0.4s ease, backdrop-filter 0.4s ease', // Transición suave para la opacidad y el blur
  },
  overlayText: {
    fontSize: '23px',
    fontWeight: '400',
    color: '#FF7E1D',
    margin: '0px 30px 0px 0px',
  },
};

export default CardHorizontal;
