import React from 'react';

const CardNaranja = () => {
  return (
    <div style={styles.cardContainer}>
      {/* Texto a la izquierda */}
      <div style={styles.textContainer}>
        <h2 style={styles.title} className='mb-3'>Programación y pensamiento computacional</h2>
        <p style={styles.text}>
          Introducimos la lógica de Programación y la forma en que las computadoras procesan la información.
          Desarrollamos habilidades en los niños y niñas para resolver problemas y crear soluciones
          utilizando el pensamiento computacional.
        </p>
      </div>

      {/* SVG a la derecha */}
      <div style={styles.svgContainer}>
        {/* Primer SVG */}
        <svg width="737" height="531" viewBox="0 0 737 531" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.mainSvg}>
        <path d="M167.661 360.566L229.747 766.759C238.319 822.843 286.278 857.181 336.866 843.455L703.256 744.047C753.844 730.321 787.905 673.73 779.333 617.646L717.247 211.453C708.675 155.37 660.716 121.032 610.128 134.757L243.738 234.166C193.15 247.891 159.089 304.483 167.661 360.566Z" fill="#FF7E1D"/>
        </svg>




        {/* Segundo SVG */}
        <svg width="140" height="51" viewBox="0 0 180 71" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.secondarySvg}>
        <path d="M5 5C18.6674 45.3189 116.39 119.123 175.843 5M99.3052 8.41686C105.911 22.5399 125.957 35.0683 137.574 8.41686M42.5854 8.41686C49.1913 22.5399 69.2369 35.0683 80.8542 8.41686" stroke="#413D45" stroke-width="8.20046" stroke-linecap="round"/>
        </svg>

      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0099FF', // Fondo morado claro
    borderRadius: '16px',
    padding: '0px 0px 0px 20px',
    width: '100%', 
    maxWidth: '800px',
    position: 'relative',
    height: "300px"
  },
  textContainer: {
    maxWidth: '50%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    fontSize: '16px',
    color: '#000000',
  },
  svgContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    maxWidth: '50%',
    bottom: 0,
    right: 0,
  },
  mainSvg: {
    width: '100%',
    height: '300px',
    position: 'relative',
    borderRadius: '16px',
  },
  secondarySvg: {
    position: 'absolute',
    top: '65%',
    right: '30%',
    transform: 'translateY(-50%)',
  },
};

export default CardNaranja;
