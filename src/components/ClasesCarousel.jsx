import React, { useState } from 'react';
import Card from './cardPropia';

const ClasesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Controla el índice de la tarjeta actual

  // Datos de ejemplo para las cards
  const cards = [
    "Aseguramos que los alumnos y alumnas aprendan de verdad, con material didáctico efectivo y atractivo.",
    "Colaboramos con tu escuela en todo el proceso educativo.",
    "Desarrollamos juntos la currícula ideal, adaptada a las oportunidades y desafíos de tu institución.",
    "Usamos plataformas de programación abiertas y sin licencias, facilitando el acceso a la educación.",
    "Plataformas tecnológicas de vanguardia a tu alcance.",
    "Asesoramiento constante a lo largo del proceso educativo.",
    "Soluciones adaptadas a la realidad del siglo XXI.",
    "Trabajo colaborativo entre alumnos y profesores.",
    "Formación integral basada en el desarrollo de habilidades tecnológicas.",
  ];

  const totalCards = cards.length;
  const cardsToShow = 1; // Número de tarjetas visibles en el carrusel

  // Función para avanzar en el carrusel
  const handleNextClick = () => {
    if (currentIndex < totalCards - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Función para retroceder en el carrusel
  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden h-full">
      {/* Contenedor de las cards */}
      <div className="w-full relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 10}%)` }} // Desplaza las cards
        >
          {cards.map((text, index) => (
            <div key={index} className=" flex-shrink-0 p-2"> {/* 1/3 para mostrar 3 tarjetas */}
              <Card text={text} isSelected={index === currentIndex} />
            </div>
          ))}
        </div>
      </div>

      {/* Botones para navegar */}
      <div className="flex justify-center items-center gap-x-3 w-full mt-3">
        {/* Botón para ir a la izquierda */}
        <button
          onClick={handlePrevClick}
          className="bg-[#E2E2E2] p-3 rounded-lg shadow-md"
          disabled={currentIndex === 0} // Deshabilita si estamos al inicio
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            >
            <path
                d="M14 6l-6 6 6 6V6z"
                fill="111111"
            />
            </svg>
        </button>

        {/* Botón para ir a la derecha */}
        <button
          onClick={handleNextClick}
          className="bg-[#E2E2E2] p-3 rounded-lg shadow-md"
          disabled={currentIndex >= totalCards - cardsToShow} // Deshabilita si llegamos al final
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            >
            <path
                d="M10 6l6 6-6 6V6z"
                fill="111111"
            />
            </svg>
        </button>
      </div>
    </div>
  );
};

export default ClasesCarousel;
