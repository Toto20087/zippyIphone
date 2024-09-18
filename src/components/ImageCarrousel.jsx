import React, { useState } from 'react';
import Card from './cardPropia';
import { animateWithGsap } from '../utils/animations';

const Carousel = () => {
  // Estado para manejar la card seleccionada
  const [selectedCard, setSelectedCard] = useState(0);
  animateWithGsap('#carousel', { y:0, opacity:1})

  // Datos de ejemplo para las cards
  const cards = [
    "Aseguramos que los alumnos y alumnas aprendan de verdad, con material didáctico efectivo y atractivo.",
    "Colaboramos con tu escuela en todo el proceso educativo.",
    "Desarrollamos juntos la currícula ideal, adaptada a las oportunidades y desafíos de tu institución.",
    "Usamos plataformas de programación abiertas y sin licencias, facilitando el acceso a la educación.",
  ];

  // Función para seleccionar la card basada en el índice del punto clicado
  const handleDotClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.cardsContainer}>
        {cards.map((text, index) => (
          <div
            key={index}
            style={{
              ...styles.cardWrapper,
              transform: index === selectedCard ? 'scale(1.1)' : 'scale(1)', // Escala la card seleccionada
              transition: 'transform 0.3s ease', // Transición de escalado
            }}
          >
            <Card text={text} isSelected={index === selectedCard} />
          </div>
        ))}
      </div>
      <div style={styles.paginationWrapper}>
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)} // Hace clic en el punto para seleccionar la card
            style={{
              ...styles.paginationDot,
              width: index === selectedCard ? '75px' : '25px', // Puntos expandido si está seleccionado
              height: '25px',
              backgroundColor: index === selectedCard ? '#5F5F5F' : '#5F5F5F', // Color según selección
              transition: 'width 0.3s ease', // Transición suave de tamaño
              cursor: 'pointer', // Muestra que es clicable
            }}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 20px',
  },
  cardWrapper: {
    flex: 1,
    margin: '0 20px', 
    transition: 'transform 0.7s ease',
  },
  paginationWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  paginationDot: {
    borderRadius: '41px', 
    margin: '0 5px',
  },
};

export default Carousel;
