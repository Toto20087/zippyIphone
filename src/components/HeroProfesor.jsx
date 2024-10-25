import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassCard from './ClassCard';
import { supabase } from './supabase/conection';

const HeroProfesor = () => {
  const navigate = useNavigate();
  const [cursos, setCursos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursosDelProfesor = async () => {
      try {
        // Obtener el usuario autenticado
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError || !userData) throw new Error("No se pudo obtener el usuario autenticado");

        const user = userData.user;

        // Obtener el ID del profesor autenticado y su instituto
        const { data: teacherData, error: teacherError } = await supabase
          .from('teachers')
          .select('id, institute_id')
          .eq('email', user.email)
          .single();

        if (teacherError || !teacherData) throw new Error("No se encontró al profesor en la base de datos");

        const { id: teacherId, institute_id: instituteId } = teacherData;

        // Obtener los cursos asociados al profesor autenticado y al mismo instituto
        const { data, error } = await supabase
          .from('teacher_classrooms')
          .select('classrooms(id, name)')
          .eq('teacher_id', teacherId)
          .eq('classrooms.institute_id', instituteId);  // Filtrar por el mismo instituto

        if (error) {
          setError("Error al obtener los cursos asignados al profesor");
          console.error(error);
          return;
        }

        // Extraer solo los nombres de los cursos y actualizar el estado
        const cursosNombres = data.map((registro) => registro.classrooms.name);
        setCursos(cursosNombres);
      } catch (error) {
        setError("Ocurrió un error al cargar los cursos del profesor");
        console.error(error);
        navigate("/login")
      }
    };

    fetchCursosDelProfesor();
  }, []);

  const handleCursoClick = (curso) => {
    navigate(`/homeProfesor/${curso}`);
  };

  if (error) {
    return <p>{error}</p>; // Mostrar mensaje de error si ocurre
  }

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
  );
};

export default HeroProfesor;
