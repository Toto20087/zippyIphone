import { useParams } from 'react-router-dom';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import NavbarClase from '../components/NavbarClase';
import VideoSection from '../components/VideoSection';
import ClasesCarousel from '../components/ClasesCarousel';
import Highlights from '../components/Highlights';
import CarouselSection from '../components/CarouselSection';
import NavbarLogeado from '@/components/NavbarLogeado';
import { useEffect, useState } from 'react';
import { supabase } from '@/components/supabase/conection';

const ClaseEnSiPage = () => {
    const { cursoId, moduloId, claseId } = useParams();

    const [name, setName] = useState('');

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
        navigate("/login");
      }
    };

    fetchUser();
  }, []);

  return (
    <div className='h-screen bg-[#F5F5F5]'>
        <NavbarLogeado
          text={claseId}
          cursoId={cursoId}
          moduloId={moduloId}
          claseId={claseId}
          name={name}
        />
        <VideoSection />
        <CarouselSection />
    </div>
  )
}

export default ClaseEnSiPage