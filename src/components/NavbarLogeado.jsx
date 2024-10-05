import IconoExit from "./IconoExit";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom";
import SideNavbar from "./SideBarProfesor";
import { useState } from "react";
import { Link } from 'react-router-dom'; // Asumiendo que usas React Router para la navegación
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { Button } from "./ui/button";

const NavbarLogeado = ({text, cursoId, moduloId, claseId}) => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/homeProfesor")
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSignOut = () => {
        navigate("/login");
    };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-[#0099FF] fixed top-0 z-99 ">
        <nav className="flex w-full justify-between items-center">
            <div className="flex items-center justify-center gap-x-5">
                <div className="relative">
                    {/* Navbar */}
                    <nav className="bg-blue-600 p-4 flex justify-center items-center gap-x-5">
                        <button onClick={toggleSidebar} className="text-white focus:outline-none">
                        <MenuIcon className="h-6 w-6" />
                        </button>
                        <img src="/logo.svg" alt="Zippy" width={80} height={80} />
                    </nav>

                    {/* Sidebar */}
                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-[#015EFF]  text-white z-50 transform ${
                        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                    >
                        <div className="p-4 flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Menú</h2>
                        <button onClick={toggleSidebar} className="text-white focus:outline-none">
                            <CloseIcon className="h-6 w-6" />
                        </button>
                        </div>

                        <ul className="mt-4 space-y-4">
                        <li>
                            <Link to={`/homeProfesor`} className="block px-4 text-white py-2 hover:text-white/50 transition-all duration-300">
                                CURSOS
                            </Link>
                        </li>
                        <li>
                            <Link to={`/homeProfesor/${cursoId}`} className="block px-4 text-white py-2 hover:text-white/50 transition-all duration-300">
                            MÓDULOS
                            </Link>
                        </li>
                        <li>
                            <Link to={`/homeProfesor/${cursoId}/${moduloId}`} className="block px-4 text-white py-2 hover:text-white/50 transition-all duration-300">
                            CLASES
                            </Link>
                        </li>
                        </ul>
                        <div className="absolute bottom-4 left-0 w-full px-4">
                            <Button className="w-full h-10 text-white" onClick={handleSignOut} variant="ghost">
                                Sign Out
                            </Button>
                        </div>
                    </div>

                    {/* Overlay */}
                    {isSidebarOpen && (
                        <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-90"
                        onClick={toggleSidebar}
                        ></div>
                    )}
                </div>
            </div>
            <p className="text-xl font-semibold">{text}</p>
            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <div className="flex items-center justify-center gap-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-white text-xl font-medium">Manuel</p>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavbarLogeado