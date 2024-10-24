import { useParams, useNavigate } from 'react-router-dom';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import NavbarClase from '../components/NavbarClase';
import VideoSection from '../components/VideoSection';
import ClasesCarousel from '../components/ClasesCarousel';
import Highlights from '../components/Highlights';
import CarouselSection from '../components/CarouselSection';
import CarouselSectionAlumno from '../components/CarouselSectionAlumno';
import NavbarAlumnos from '@/components/NavbarAlumnos';
import { useEffect, useState } from 'react';
import { supabase } from '@/components/supabase/conection';

const ClaseEnSiAlumno = () => {
    const { cursoId, moduloId, claseId } = useParams();
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
    <div className='h-screen bg-[#F5F5F5]'>
        <NavbarAlumnos
        text={claseId}
        name={name}
        />
        <VideoSection />
        <CarouselSectionAlumno />
    </div>
  )
}

export default ClaseEnSiAlumno