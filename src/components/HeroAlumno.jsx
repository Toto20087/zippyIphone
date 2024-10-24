import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressCard from '../components/ProgressCard';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase/conection';

const HeroAlumno = () => {
  const { cursoId } = useParams(); // Aquí 'cursoId' es probablemente el nombre del curso, como "5to B"
  const navigate = useNavigate();
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    const fetchClassroomId = async () => {
      try {
        // Obtén el UUID del classroom usando el nombre de la clase
        const { data: classroomData, error: classroomError } = await supabase
          .from('classrooms')
          .select('id')
          .eq('name', cursoId); // Aquí se asume que 'cursoId' es el nombre del classroom

        if (classroomError || classroomData.length === 0) {
          console.error('Error al obtener el classroom_id:', classroomError);
          return;
        }

        const classroomUUID = classroomData[0].id; // El UUID del classroom

        // Ahora obtenemos los módulos con el UUID del classroom, junto con el título de cada módulo
        const fetchModulos = async () => {
          try {
            const { data: modulesData, error: modulesError } = await supabase
              .from('classroom_modules')
              .select('module_id, modules:modules(title)') // Usamos la relación para obtener el título del módulo
              .eq('classroom_id', classroomUUID);

            if (modulesError) {
              console.error('Error al obtener los módulos:', modulesError);
              return;
            }

            const modulosWithProgress = await Promise.all(
              modulesData.map(async ({ module_id, modules: { title } }) => {
                const { count: totalClases, error: totalError } = await supabase
                  .from('lessons')
                  .select('*', { count: 'exact' })
                  .eq('module_id', module_id);

                const { count: completedClases, error: completedError } = await supabase
                  .from('lessons')
                  .select('*', { count: 'exact' })
                  .eq('module_id', module_id)
                  .eq('status', true);

                return {
                  module_id,
                  title, // Añadimos el título del módulo
                  total: totalClases,
                  completadas: completedClases,
                };
              })
            );

            setModulos(modulosWithProgress.filter(Boolean));
          } catch (error) {
            console.error('Error al obtener los datos de módulos:', error);
          }
        };

        fetchModulos();
      } catch (error) {
        console.error('Error al obtener el classroom_id:', error);
      }
    };

    fetchClassroomId();
  }, [cursoId]);

  const handleClaseClick = (moduloId) => {
    navigate(`/homeAlumno/${cursoId}/${moduloId}`);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-5 bg-[#F5F5F5]">
      <div className='flex items-center justify-center flex-wrap gap-x-4 gap-y-2 w-5/6 h-3/4 overflow-hidden overflow-y-auto'>
        {modulos.map((moduloData, index) => (
          <div key={moduloData.module_id} onClick={() => handleClaseClick(moduloData.title)}>
            <ProgressCard
              key={index}
              curso={moduloData.title} // Aquí mostramos el nombre del módulo
              completadas={moduloData.completadas}
              total={moduloData.total}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroAlumno;
