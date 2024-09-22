import { useParams } from 'react-router-dom';
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import NavbarClase from '../components/NavbarClase';

const ClaseEnSiPage = () => {
    const { cursoId, moduloId, claseId } = useParams();
  return (
    <div className='h-screen bg-[#F5F5F5]'>
        <NavbarClase />
    </div>
  )
}

export default ClaseEnSiPage