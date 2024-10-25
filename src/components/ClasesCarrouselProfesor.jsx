import React, { useEffect, useState } from 'react';
import Card from './cardPropia';
import { supabase } from './supabase/conection';
import { useParams } from 'react-router-dom';

const ClasesCarouselProfesor = () => {
  const { moduloId } = useParams(); // Obtener el nombre del módulo
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchModuleLessons = async () => {
      if (!moduloId) {
        console.error('El ID del módulo es inválido:', moduloId);
        return;
      }

      try {
        // Obtener el ID del módulo por su nombre
        const { data: moduleData, error: moduleError } = await supabase
          .from('modules')
          .select('id')
          .eq('title', moduloId)
          .single(); // Asegúrate de obtener solo un resultado

        if (moduleError) {
          console.error('Error al obtener el módulo:', moduleError);
          return;
        }

        if (!moduleData) {
          console.error('No se encontró ningún módulo con ese nombre');
          return;
        }

        const moduleIdValue = moduleData.id;

        const { data: lessonsData, error: lessonsError } = await supabase
          .from('lessons')
          .select('title')
          .eq('status', false)
          .eq('module_id', moduleIdValue);

        if (lessonsError) {
          console.error('Error al obtener las clases:', lessonsError);
        } else {
          setCards(lessonsData.map(lesson => lesson.title));
        }
      } catch (error) {
        console.error('Error en la consulta:', error);
      }
    };

    fetchModuleLessons();
  }, [moduloId]);

  const totalCards = cards.length;

  const handleNextClick = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden h-full">
      <div className="w-full relative">
        <div
          className="flex items-center justify-center transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 10}%)` }}
        >
          {cards.map((text, index) => (
            <div key={index} className="flex-shrink-0 p-2">
              <Card text={text} isSelected={index === currentIndex} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-x-3 w-full mt-3">
        <button
          onClick={handlePrevClick}
          className="bg-[#E2E2E2] p-3 rounded-lg shadow-md"
          disabled={currentIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path d="M14 6l-6 6 6 6V6z" fill="#111111" />
          </svg>
        </button>

        <button
          onClick={handleNextClick}
          className="bg-[#E2E2E2] p-3 rounded-lg shadow-md"
          disabled={currentIndex >= totalCards - 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
            <path d="M10 6l6 6-6 6V6z" fill="#111111" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ClasesCarouselProfesor;
