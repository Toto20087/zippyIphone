import { useParams } from 'react-router-dom';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import NavbarClase from '../components/NavbarClase';
import VideoSection from '../components/VideoSection';
import ClasesCarousel from '../components/ClasesCarousel';
import Highlights from '../components/Highlights';
import CarouselSection from '../components/CarouselSection';

const ClaseEnSiPage = () => {
    const { cursoId, moduloId, claseId } = useParams();
  return (
    <div className='h-screen bg-[#F5F5F5]'>
        <NavbarClase />
        <VideoSection />
        <CarouselSection />
    </div>
  )
}

export default ClaseEnSiPage