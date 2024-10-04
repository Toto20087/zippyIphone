import React from 'react'
import { useParams } from 'react-router-dom';
import NavbarCursos from '../components/NavbarCursos';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';
import { DatePickerWithPresets } from '@/components/DatePicker';
import NavbarLogeado from '@/components/NavbarLogeado';

const ClasesPage = () => {
    const navigate = useNavigate();
    const { cursoId, moduloId } = useParams();
    const tasks = [
        { title: 'Figma 1', status: 'completado' },
        { title: 'Figma 2', status: 'completado' },
        { title: 'Figma 3', status: 'completado' },
        { title: 'Photoshop 1', status: 'programado' }, // Cambiado de 'pendiente' a 'programado'
        { title: 'Photoshop 2', status: 'programado' }, // Cambiado de 'pendiente' a 'programado'
        { title: 'Illustrator 1', status: 'pendiente' }, // Cambiado de 'no iniciada' a 'pendiente'
        { title: 'Illustrator 2', status: 'pendiente' } // Cambiado de 'no iniciada' a 'pendiente'
      ];

      const sortedTasks = tasks.sort((a, b) => {
        const order = { programado: 1, pendiente: 2, completado: 3 }; // Cambiado de 'pendiente' a 'programado' y de 'no iniciada' a 'pendiente'
        return order[a.status] - order[b.status];
      });

    const handleClickNavigate = (clase) => {
        navigate(`/homeProfesor/${cursoId}/${moduloId}/${clase}`);
    }

  return (
    <main className="h-screen bg-[#F5F5F5] flex items-center justify-center ">
        <NavbarLogeado
        text={moduloId}
        />
        <div className='w-3/4'>
            {sortedTasks.map((task, index) => (
                <div key={index}   >
                    <TaskCard title={task.title} status={task.status} onClick={() => handleClickNavigate(task.title)} />
                </div>
            ))}
        </div>
    </main>
  )
}

export default ClasesPage
