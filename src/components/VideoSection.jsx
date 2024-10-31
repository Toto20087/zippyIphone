import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaDownload } from 'react-icons/fa';
import { supabase } from './supabase/conection'; // Asegúrate de tener la conexión correcta

const VideoSection = () => {
  const { cursoId, moduloId, claseId } = useParams(); // Usamos claseId para identificar la clase
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessonContent = async () => {
      try {
        // 1. Obtener la lección con su contenido y descripción
        const { data: lessonData, error: lessonError } = await supabase
          .from('lessons')
          .select('content, description')
          .eq('title', claseId) // Filtramos por el título de la clase que viene en la URL
          .single(); // Usamos .single() para obtener un solo resultado

        if (lessonError || !lessonData) {
          setError('No se pudo cargar el contenido de la clase');
          console.error('Error al obtener la lección:', lessonError);
          return;
        }

        // 2. Actualizamos el estado con el contenido y la descripción
        setContent(lessonData.content);
        setDescription(lessonData.description);
      } catch (error) {
        console.error('Error al obtener los datos de la lección:', error);
        setError('Ocurrió un error al cargar el contenido de la clase');
      }
    };

    fetchLessonContent();
  }, [claseId]);

  if (error) {
    return <p>{error}</p>; // Mostrar mensaje de error si ocurre
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mx-auto h-[125vh] flex items-center justify-center flex-col w-screen ">

      <div className="w-fit h-full flex items-center justify-center">
        {content ? (
          // Mostrar el contenido de la clase (iframe)
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          // Mientras se carga el contenido
          <p className='text-black'>Cargando contenido de la clase...</p>
        )}
      </div>

      {/* Descripción debajo del contenido */}
      <div className="w-2/4 mt-4 flex items-start justify-between pb-20">
        <div className='flex items-start justify-center flex-col'>
          <h3 className="text-2xl font-semibold text-black">Aclaraciones del profesor</h3>
          <p className="text-gray-600 mt-2 w-2/3">
            {description ? description : 'Cargando descripción...'}
          </p>
        </div>
        <div className="w-2/4 mt-4 flex items-center justify-center">
          <FaDownload className="text-gray-600 mr-2" />
          <a
            href="#"
            className="text-gray-600 font-medium hover:underline w-56 text-end"
            download
          >
            Descargar material adjunto
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
