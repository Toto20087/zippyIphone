import { useParams } from 'react-router-dom';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import NavbarClase from '../components/NavbarClase';
import VideoSection from '../components/VideoSection';
import ClasesCarousel from '../components/ClasesCarousel';
import Highlights from '../components/Highlights';
import CarouselSection from '../components/CarouselSection';
import CarouselSectionAlumno from '../components/CarouselSectionAlumno';
import NavbarAlumnos from '@/components/NavbarAlumnos';

const ClaseEnSiAlumno = () => {
    const { cursoId, moduloId, claseId } = useParams();
  return (
    <div className='h-screen bg-[#F5F5F5]'>
        <NavbarAlumnos
        text={claseId}
        />
        <VideoSection />
        <CarouselSectionAlumno />
    </div>
  )
}

export default ClaseEnSiAlumno