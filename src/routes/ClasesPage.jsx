import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarLogeado from '@/components/NavbarLogeado';
import TaskCard from '@/components/TaskCard';
import { supabase } from '@/components/supabase/conection';

const ClasesPage = () => {
  const navigate = useNavigate();
  const { cursoId, moduloId } = useParams(); // Nota: Ahora no incluimos claseId ya que estamos en la lista de lecciones
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        try {
          const { data: teacherData, error: teacherError } = await supabase
            .from('teachers')
            .select('name')
            .eq('email', user.email);

          if (teacherError) throw teacherError;

          if (teacherData && teacherData.length > 0) {
            setName(teacherData[0].name);
          } else {
            console.error('No se encontró el usuario en la tabla "teachers".');
          }
        } catch (error) {
          console.error('Error al buscar el nombre del usuario:', error);
        }
      } else {
        console.error('No hay usuario autenticado:', error);
        navigate("/login");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        // Obtener el UUID del módulo basado en el nombre (moduloId)
        const { data: moduleData, error: moduleError } = await supabase
          .from('modules')
          .select('id')
          .eq('title', moduloId)
          .single();

        if (moduleError || !moduleData) {
          console.error('Error al obtener el módulo:', moduleError);
          return;
        }

        const moduleUUID = moduleData.id;

        // Obtener las lecciones del módulo actual
        const { data: lessonsData, error: lessonsError } = await supabase
          .from('lessons')
          .select('id, title, status')
          .eq('module_id', moduleUUID);

        if (lessonsError) {
          console.error('Error al obtener las lecciones:', lessonsError);
          return;
        }

        // Mapear las lecciones con sus respectivos estados
        const filteredTasks = lessonsData.map((lesson) => ({
          id: lesson.id,
          title: lesson.title,
          status: lesson.status === null ? 'pendiente' : lesson.status ? 'completado' : 'programado',
        }));

        // Ordenar las tareas: PENDIENTE primero, PROGRAMADO después y COMPLETADO al final
        const sortedTasks = filteredTasks.sort((a, b) => {
          const order = { programado: 1, pendiente : 2, completado: 3 };
          return order[a.status] - order[b.status];
        });

        setTasks(sortedTasks); // Actualizar el estado con las lecciones ordenadas
      } catch (error) {
        console.error('Error al obtener las lecciones:', error);
      }
    };

    fetchLessons();
  }, [moduloId]);

  const handleClickNavigate = (clase) => {
    navigate(`/homeProfesor/${cursoId}/${moduloId}/${clase}`);
  };

  return (
    <main className="h-screen bg-[#F5F5F5] flex items-center justify-center">
      <NavbarLogeado text={moduloId} cursoId={cursoId} moduloId={moduloId} name={name} />
      <div className="w-3/4">
        {tasks.length === 0 ? (
          <p>No hay lecciones disponibles</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index}>
              <TaskCard title={task.title} status={task.status} onClick={() => handleClickNavigate(task.title)} lessonId={task.id} />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default ClasesPage;
