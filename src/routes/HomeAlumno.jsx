import NavbarLogeado from "../components/NavbarLogeado"
import HeroProfesor from "../components/HeroProfesor"
import NavbarAlumnos from "../components/NavbarAlumnos"
import HeroAlumno from "../components/HeroAlumno";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "@/components/supabase/conection";
import { useNavigate } from "react-router-dom";

const HomeAlumno = () => {
  const {cursoId} = useParams()
  const [name, setName] = useState('');
  const navigate = useNavigate();

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

  return (
    <main className="h-screen bg-[#F5F5F5] ">
        <NavbarAlumnos 
        text={cursoId}
        name = {name}
        />
        <HeroAlumno />
    </main>
  )
}

export default HomeAlumno