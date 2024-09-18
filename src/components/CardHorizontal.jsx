import React from 'react';

const CardHorizontal = ({ text  }) => {

  return (
    <div
      style={{
        ...styles.cardContainer,
        backgroundColor: '#FFFFFF', // Cambia el color de fondo según la selección
      }}
      className='shadow-xl'
    >
      <div style={styles.textContainer}>
        <p style={styles.text} className='z-50'>
          {text}
        </p>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    position: 'relative',
    width: '673px', // Ajusta el tamaño según necesites
    height: '400px', // Ajusta el tamaño según necesites
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
    cursor: 'pointer',
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
    margin: '0 0px 0px 20px',
    width: "75%"
  },
};

export default CardHorizontal;
