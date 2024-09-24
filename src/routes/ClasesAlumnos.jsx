import React from 'react'
import { useParams } from 'react-router-dom';
import NavbarCursos from '../components/NavbarCursos';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';
import TaskCardAlumnos from '../components/TaskCardAlumnos';

const ClasesAlumnos = () => {
    const navigate = useNavigate();
    const { cursoId, moduloId } = useParams();
    const tasks = [
        { title: 'Figma 1', status: 'completado' },
        { title: 'Figma 2', status: 'completado' },
        { title: 'Figma 3', status: 'completado' },
        { title: 'Photoshop 1', status: 'pendiente' },
        { title: 'Photoshop 2', status: 'pendiente' },
        { title: 'Ejemplo 1', status: 'pendiente' },
        { title: 'Ejemplo 2', status: 'completado' },
      ];

      const sortedTasks = tasks.sort((a, b) => {
        const order = { pendiente: 1, 'no iniciada': 2, completado: 3 };
        return order[a.status] - order[b.status];
      });

    const handleClickNavigate = (clase) => {
        navigate(`/homeAlumno/${cursoId}/${moduloId}/${clase}`);
    }

  return (
    <main className="h-screen bg-[#F5F5F5] flex items-center justify-center ">
        <NavbarCursos
        curso={moduloId}
        />
        <div className='w-3/4'>
            {sortedTasks.map((task, index) => (
                <div key={index} onClick={() => handleClickNavigate(task.title)}>
                    <TaskCardAlumnos title={task.title} status={task.status} />
                </div>
            ))}
        </div>
    </main>
  )
}

export default ClasesAlumnos