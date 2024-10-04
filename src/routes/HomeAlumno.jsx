import NavbarLogeado from "../components/NavbarLogeado"
import HeroProfesor from "../components/HeroProfesor"
import NavbarAlumnos from "../components/NavbarAlumnos"
import HeroAlumno from "../components/HeroAlumno";
import { useParams } from "react-router-dom";

const HomeAlumno = () => {
  const {cursoId} = useParams()

  return (
    <main className="h-screen bg-[#F5F5F5] ">
        <NavbarAlumnos 
        text={cursoId}
        />
        <HeroAlumno />
    </main>
  )
}

export default HomeAlumno