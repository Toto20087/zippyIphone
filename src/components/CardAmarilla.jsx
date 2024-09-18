import React from 'react';

const CardAmarilla = () => {
  return (
    <div style={styles.cardContainer}>
      {/* Texto a la izquierda */}
      <div style={styles.textContainer}>
        <h2 style={styles.title} className='mb-3'>Arte y creatividad digital</h2>
        <p style={styles.text}>
        Fomentamos la expresión creativa a través de la tecnología, explorando herramientas digitales para el diseño gráfico, la animación, la música y otras formas de arte.
        </p>
      </div>

      {/* SVG a la derecha */}
      <div style={styles.svgContainer}>
        {/* Primer SVG */}
        <svg width="658" height="450" viewBox="0 0 658 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.mainSvg}>
        <path d="M165.398 232.176L322.597 569.293C344.301 615.839 399.63 635.977 446.176 614.273L783.293 457.073C829.839 435.369 849.977 380.041 828.273 333.494L671.074 -3.623C649.369 -50.1692 594.041 -70.3072 547.495 -48.6026L210.377 108.597C163.831 130.301 143.693 185.629 165.398 232.176Z" fill="#FFCE00"/>
        </svg>



        {/* Segundo SVG */}
        <svg width="150" height="61" viewBox="0 0 180 71" fill="none" xmlns="http://www.w3.org/2000/svg" style={styles.secondarySvg}>
        <path d="M5 5C18.6674 45.3189 116.39 119.123 175.843 5M99.3052 8.41686C105.911 22.5399 125.957 35.0683 137.574 8.41686M42.5854 8.41686C49.1913 22.5399 69.2369 35.0683 80.8542 8.41686" stroke="#FFB700" stroke-width="8.20046" stroke-linecap="round"/>
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
    backgroundColor: '#FF7E1D', // Fondo morado claro
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
    top: '60%',
    right: '20%',
    transform: 'translateY(-50%)',
  },
};

export default CardAmarilla;
