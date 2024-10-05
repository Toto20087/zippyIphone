import React from 'react';
import { useParams } from 'react-router-dom';
import ProgressCard from '../components/ProgressCard';
import NavbarLogeado from '../components/NavbarLogeado';
import NavbarCursos from '../components/NavbarCursos';
import { useNavigate } from 'react-router-dom';

const CursoPage = () => {
  const navigate = useNavigate();
  const { cursoId, moduloId, claseId } = useParams();

  const cursos = [
    { curso: 'Programación 1', completadas: 2, total: 10 },
    { curso: 'Matemáticas', completadas: 7, total: 10 },
    { curso: 'Matemáticas', completadas: 2, total: 5 },
    { curso: 'Ejemplo', completadas: 4, total: 5 },
    { curso: 'Ejemplo', completadas: 3, total: 5 },
    { curso: 'Ejemplo', completadas: 1, total: 5 },
    { curso: 'Ejemplo', completadas: 1, total: 5 },
    { curso: 'Ejemplo', completadas: 2, total: 5 },
    { curso: 'Ejemplo', completadas: 3, total: 5 },
    { curso: 'Ejemplo', completadas: 4, total: 5 },
    { curso: 'Ejemplo', completadas: 4, total: 5 },
    { curso: 'Ejemplo', completadas: 2, total: 5 },
    { curso: 'Ejemplo', completadas: 1, total: 5 },
    { curso: 'Ejemplo', completadas: 2, total: 5 },
    { curso: 'Hola', completadas: 2, total: 5 },
    { curso: 'Chau', completadas: 2, total: 5 },
    { curso: 'Buenas', completadas: 2, total: 5 },

  ];

  const handleClaseClick = (modulo) => {
    navigate(`/homeProfesor/${cursoId}/${modulo}`);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center gap-5 bg-[#F5F5F5] ">
        <NavbarLogeado 
        text={cursoId}
        cursoId={cursoId}
        moduloId={moduloId}
        claseId={claseId}
        />
        <div className='flex items-center justify-center flex-wrap gap-x-4 gap-y-2 w-5/6 h-3/4 overflow-hidden overflow-y-auto'>
          {cursos.map((cursoData, index) => (
            <div key={cursoData} onClick={() => handleClaseClick(cursoData.curso)}>
              <ProgressCard
              key={index}
              curso={cursoData.curso}
              completadas={cursoData.completadas}
              total={cursoData.total}
              />
            </div>
          ))} 
        </div>
    </div>
  );
};

export default CursoPage;
