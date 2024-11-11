import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressCard from '../components/ProgressCard';
import NavbarLogeado from '../components/NavbarLogeado';
import { supabase } from '@/components/supabase/conection';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


const CursoPage = () => {
  const navigate = useNavigate();
  const { cursoId } = useParams();
  const [modulos, setModulos] = useState([]);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        try {
          // Buscar el nombre del usuario en la tabla 'students' usando el 'user_id'
          const { data: studentData, error: studentError } = await supabase
            .from('teachers')
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
    const fetchModulosConProgreso = async () => {
      try {
        // Obtener el ID del curso basado en el nombre
        const { data: cursoData, error: cursoError } = await supabase
          .from('classrooms')
          .select('id')
          .eq('name', cursoId)
          .single();

        if (cursoError || !cursoData) throw new Error('Curso no encontrado');

        const cursoIdReal = cursoData.id;

        // Obtener los módulos asociados al curso usando classroom_modules
        const { data: modulosData, error: modulosError } = await supabase
          .from('classroom_modules')
          .select('module_id, modules(title)')
          .eq('classroom_id', cursoIdReal);

        if (modulosError) throw modulosError;

        // Obtener el progreso de lecciones para cada módulo
        const modulosConProgreso = await Promise.all(
          modulosData.map(async ({ module_id, modules }) => {
            const { data: leccionesData, error: leccionesError } = await supabase
              .from('lessons')
              .select('status')
              .eq('module_id', module_id);

            if (leccionesError) throw leccionesError;

            // Calcular el progreso
            const totalLecciones = leccionesData.length;
            const completadas = leccionesData.filter((leccion) => leccion.status).length;

            return {
              curso: modules.title,
              completadas,
              total: totalLecciones,
            };
          })
        );

        setModulos(modulosConProgreso);
      } catch (error) {
        setError('Error al cargar los módulos');
        console.error(error);
      }
    };

    fetchModulosConProgreso();
  }, [cursoId]);

  const handleModuloClick = (modulo) => {
    navigate(`/homeProfesor/${cursoId}/${modulo}`);
  };

  if (error) {
    return <p>{error}</p>; // Mostrar mensaje de error si ocurre
  }

  return (
    <div className="w-full h-screen flex items-center justify-center gap-5 bg-[#F5F5F5]">
      <NavbarLogeado text={cursoId} name={name} />
      <div className="fixed bottom-0 left-0 mb-4 ml-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href='/homeProfesor'>Clases</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Modulos</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-x-4 gap-y-2 w-5/6 h-3/4 overflow-hidden overflow-y-auto">
        {modulos.map((moduloData, index) => (
          <div key={index} onClick={() => handleModuloClick(moduloData.curso)}>
            <ProgressCard
              curso={moduloData.curso}
              completadas={moduloData.completadas}
              total={moduloData.total}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CursoPage;
