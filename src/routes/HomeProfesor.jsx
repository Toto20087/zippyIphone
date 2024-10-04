import NavbarLogeado from "../components/NavbarLogeado"
import HeroProfesor from "../components/HeroProfesor"

const HomeProfesor = () => {

  return (
    <main className="h-screen bg-[#F5F5F5] ">
        <NavbarLogeado
        text="Cursos"
        />
        <HeroProfesor />
    </main>
  )
}

export default HomeProfesor