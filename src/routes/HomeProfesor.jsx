import React, { useEffect, useState } from 'react';
import { supabase } from '@/components/supabase/conection';
import NavbarLogeado from "../components/NavbarLogeado";
import HeroProfesor from "../components/HeroProfesor";
import { useNavigate } from 'react-router-dom';

const HomeProfesor = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

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
        navigate("/login")
      }
    };
  
    fetchUser();
  }, []);

  return (
    <main className="h-screen bg-[#F5F5F5]">
      <NavbarLogeado
        text="Cursos"
        name={name}
      />
      <HeroProfesor />
    </main>
  );
};

export default HomeProfesor;
