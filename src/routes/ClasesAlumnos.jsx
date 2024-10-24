import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavbarAlumnos from '@/components/NavbarAlumnos';
import TaskCardAlumnos from '@/components/TaskCardAlumnos';
import { supabase } from '@/components/supabase/conection';

const ClasesAlumnos = () => {
  const { cursoId, moduloId } = useParams(); // Ahora moduloId será el nombre del módulo en la URL
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        try {
          // Buscar el nombre del usuario en la tabla 'students' usando el 'user_id'
          const { data: studentData, error: studentError } = await supabase
            .from('students')
            .select('name')
            .eq('email', user.email); 
  
          if (studentError) throw studentError;
  
          if (studentData && studentData.length > 0) {
            setName(studentData[0].name);
          } else {
            console.error('No se encontró el usuario en la tabla "students".');
          }
        } catch (error) {
          console.error('Error al buscar el nombre del usuario:', error);
        }
      } else {
        console.error('No hay usuario autenticado:', error);
        navigate("/login")
      }
    };
  
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        // 1. Obtén el UUID del módulo utilizando el nombre desde la URL (moduloId)
        const { data: moduleData, error: moduleError } = await supabase
          .from('modules')
          .select('id')
          .eq('title', moduloId) // Usamos el título (nombre) para buscar el módulo
          .single(); // Usamos single() ya que asumimos que los nombres son únicos

        if (moduleError || !moduleData) {
          console.error('Error al obtener el módulo:', moduleError);
          return;
        }

        const moduleUUID = moduleData.id; // UUID del módulo

        // 2. Ahora obtenemos las lecciones del módulo utilizando el UUID
        const { data: lessonsData, error: lessonsError } = await supabase
          .from('lessons')
          .select('title, status')
          .eq('module_id', moduleUUID); // Filtramos por UUID del módulo

        if (lessonsError) {
          console.error('Error al obtener las lecciones:', lessonsError);
          return;
        }

        // 3. Filtramos solo las lecciones con estado TRUE (completado) o FALSE (pendiente)
        const filteredTasks = lessonsData
          .filter((lesson) => lesson.status !== null) // Excluir NULL (no iniciadas)
          .map((lesson) => ({
            title: lesson.title,
            status: lesson.status ? 'completado' : 'pendiente',
          }));

        // 4. Ordenamos las lecciones: pendientes primero, completadas después
        const sortedTasks = filteredTasks.sort((a, b) => {
          const order = { pendiente: 1, completado: 2 };
          return order[a.status] - order[b.status];
        });

        setTasks(sortedTasks); // Actualizamos el estado con las tareas ordenadas
      } catch (error) {
        console.error('Error al obtener las lecciones:', error);
      }
    };

    fetchLessons();
  }, [moduloId]);

  const handleClickNavigate = (clase) => {
    navigate(`/homeAlumno/${cursoId}/${moduloId}/${clase}`);
  };

  return (
    <main className="h-screen bg-[#F5F5F5] flex items-center justify-center ">
      <NavbarAlumnos text={moduloId} name={name} /> {/* Muestra el nombre del módulo en la Navbar */}
      <div className='w-3/4'>
        {tasks.length === 0 ? (
          <p>No hay lecciones disponibles</p>
        ) : (
          tasks.map((task, index) => (
            <div key={index} onClick={() => handleClickNavigate(task.title)}>
              <TaskCardAlumnos title={task.title} status={task.status} />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default ClasesAlumnos;
