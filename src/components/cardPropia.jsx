import React from 'react';

const Card = ({ text, isSelected  }) => {

  return (
    <div
      style={{
        ...styles.cardContainer,
        backgroundColor: isSelected ? '#33FFD1' : '#FFFFFF', // Cambia el color de fondo según la selección
      }}
    >
      <div style={styles.textContainer}>
        <p style={styles.text} className='z-50'>
          {text}
        </p>
      </div>
      <div style={styles.vectorContainer}>
        <div style={styles.vectorLeft} className='w-1/2'>
          <svg
            width="157"
            height="97"
            viewBox="0 0 314 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 23.189C32.5545 1.99043 123.747 -26.8513 161.259 51.3968C198.77 129.645 192.728 158.369 314 195H0V23.189Z"
              fill={isSelected ? '#0099FF' : '#33FFD1'} // Cambia el color del vector según la selección
            />
          </svg>
        </div>
        <div style={styles.vectorRight}>
          <svg
            width="108"
            height="138"
            viewBox="0 0 108 138"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M141.552 34C141.552 101.152 184.11 168.172 121.209 123.25C126.61 133.432 121.209 8.84895 0.828893 -21.099C142.552 -47.5 113.052 40.5 119.551 -56C155.552 -32.5 141.552 -33.1515 141.552 34Z"
              fill={isSelected ? '#0099FF' : '#33FFD1'} // Cambia el color del vector según la selección
            />
          </svg>
        </div>
      </div>
      <div style={styles.logo} className='z-50'>
        <svg width="60" height="40" viewBox="0 0 947 298" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.947266 233.437V191.703L125.806 91.9588L2.00993 92.6615V56.5841H175.322V98.3228L50.4633 198.068L177.802 197.364V233.437H0.947266Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
            <path d="M200.793 56.5841H242.881V233.444H200.793V56.5841Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
            <path d="M373.041 202.312C410.891 202.312 432.823 180.74 432.823 145.011C432.823 109.287 410.536 87.7135 373.041 87.7135C336.26 87.7135 313.62 111.412 313.62 145.011C313.62 178.615 336.26 202.312 373.041 202.312ZM272.588 297.109V56.5841H311.5L313.973 81.6975H317.156C330.599 64.0162 353.588 51.6361 383.656 51.6361C436.713 51.6361 475.973 89.8335 475.973 145.011C475.973 200.193 436.713 238.391 383.656 238.391C353.588 238.391 330.953 226.011 317.864 208.328H314.683V297.109H272.588Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
            <path d="M600.125 202.312C637.973 202.312 659.901 180.74 659.901 145.011C659.901 109.287 637.62 87.7135 600.125 87.7135C563.339 87.7135 540.702 111.412 540.702 145.011C540.702 178.615 563.339 202.312 600.125 202.312ZM499.672 297.109V56.5841H538.584L541.057 81.6975H544.24C557.682 64.0162 580.672 51.6361 610.74 51.6361C663.792 51.6361 703.057 89.8335 703.057 145.011C703.057 200.193 663.792 238.391 610.74 238.391C580.672 238.391 558.036 226.011 544.948 208.328H541.765V297.109H499.672Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
            <path d="M868.949 56.5841L809.881 198.421H805.637L745.506 56.5841H698.465L778.918 230.729H809.115V261.136H726.407V297.109H779.813C802.099 297.109 809.173 291.803 818.017 271.995L915.641 56.5841H868.949Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
            <path d="M915.922 26.0161H946.334V56.4228H915.922V26.0161Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
            <path d="M200.918 0.0574951H243.194V30.4641H200.918V0.0574951Z" fill={isSelected ? '#33FFD1' : '#0099FF'}/>
        </svg>

      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    position: 'relative',
    width: '300px', // Ajusta el tamaño según necesites
    height: '400px', // Ajusta el tamaño según necesites
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    cursor: 'pointer', // Añadido para indicar que la card es interactiva
  },
  textContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  vectorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  vectorLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  vectorRight: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  logo: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: '24px',
  },
};

export default Card;
