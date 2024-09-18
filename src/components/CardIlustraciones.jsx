import React from 'react';

const CustomCard = () => {
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
        <svg
          width="508"
          height="389"
          viewBox="0 0 508 389"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={styles.mainSvg}
        >
          <path
            d="M91.3264 172.614L334.712 320.837C368.316 341.303 412.149 330.651 432.614 297.047L580.837 53.6614C601.302 20.0569 590.651 -23.7753 557.046 -44.2407L313.661 -192.464C280.056 -212.929 236.224 -202.278 215.759 -168.673L67.5359 74.7122C47.0706 108.317 57.722 152.149 91.3264 172.614Z"
            fill="#6D00F4"
          />
        </svg>

        {/* Segundo SVG */}
        <svg
          width="118"
          height="52"
          viewBox="0 0 118 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={styles.secondarySvg}
        >
          <path
            d="M5 5C12.2893 17.5285 31.7882 35.0683 51.4692 5M67.1868 5C74.4761 17.5285 93.9749 35.0683 113.656 5M39.8519 36.4351C46.4579 44.6355 62.9499 56.1162 76.0706 36.4351"
            stroke="#AF7FFF"
            strokeWidth="8.2"
            strokeLinecap="round"
          />
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
    backgroundColor: '#BB83FF', // Fondo morado claro
    borderRadius: '16px',
    padding: '0px 0px 0px 20px',
    width: '100%', 
    maxWidth: '800px',
    position: 'relative',
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
    top: 0,
    right: 0,
    borderRadius: '16px',
  },
  mainSvg: {
    width: '100%',
    height: 'auto',
    position: 'relative',
    borderRadius: '16px',
  },
  secondarySvg: {
    position: 'absolute',
    top: '40%',
    right: '40%',
    transform: 'translateY(-50%)',
  },
};

export default CustomCard;
