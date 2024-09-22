import ClassCard from './ClassCard';
import { useNavigate } from 'react-router-dom';


const HeroProfesor = () => {
  const navigate = useNavigate();
  const cursos = ['5to B', '3to B', '4to B', '1to B', '2to B', '6to B', '2to A', '4to C'];

  const handleCursoClick = (curso) => {
    navigate(`/homeProfesor/${curso}`);
  };

  return (
    <section className='w-full h-screen flex items-center justify-center'>
        <div className='flex items-center justify-center flex-wrap gap-x-6 gap-y-6 w-5/6 h-3/4 overflow-hidden overflow-y-auto'>
            {cursos.map((curso) => (
            <div key={curso} onClick={() => handleCursoClick(curso)}>
                <ClassCard curso={curso} />
            </div>
            ))}
        </div>
    </section>
  )
}

export default HeroProfesor