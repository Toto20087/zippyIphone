import React from 'react'
import { useParams } from 'react-router-dom';
import NavbarCursos from '../components/NavbarCursos';
import TaskCard from '../components/TaskCard';
import { useNavigate } from 'react-router-dom';
import { DatePickerWithPresets } from '@/components/DatePicker';

const ClasesPage = () => {
    const navigate = useNavigate();
    const { cursoId, moduloId } = useParams();
    const tasks = [
        { title: 'Figma 1', status: 'completado' },
        { title: 'Figma 2', status: 'completado' },
        { title: 'Figma 3', status: 'completado' },
        { title: 'Photoshop 1', status: 'pendiente' },
        { title: 'Photoshop 2', status: 'pendiente' },
        { title: 'Illustrator 1', status: 'no iniciada' },
        { title: 'Illustrator 2', status: 'no iniciada' }
      ];

      const sortedTasks = tasks.sort((a, b) => {
        const order = { pendiente: 1, 'no iniciada': 2, completado: 3 };
        return order[a.status] - order[b.status];
      });

    const handleClickNavigate = (clase) => {
        navigate(`/homeProfesor/${cursoId}/${moduloId}/${clase}`);
    }

  return (
    <main className="h-screen bg-[#F5F5F5] flex items-center justify-center ">
        <NavbarCursos
        curso={moduloId}
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