import IconoExit from "./IconoExit";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useNavigate } from "react-router-dom";
import SideNavbar from "./SideBarProfesor";
import { useState } from "react";
import { Link } from 'react-router-dom'; // Asumiendo que usas React Router para la navegación
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { Button } from "./ui/button";
import { supabase } from '@/components/supabase/conection';


const NavbarLogeado = ({text, cursoId, moduloId, claseId, name}) => {
    const navigate = useNavigate();
    const home = () => {
        navigate("/homeProfesor")
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut(); 
            if (error) throw error;
            navigate("/login");
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-[#0099FF] fixed top-0 z-99 ">
        <nav className="flex w-full justify-between items-center">
            <div className="flex items-center justify-center gap-x-5">
                <div className="relative">
                    <nav className="bg-blue-600 p-4 flex justify-center items-center gap-x-5">
                        <img src="/logo.svg" alt="Zippy" width={80} height={80} />
                    </nav>
                </div>
            </div>
            <p className="text-xl font-semibold">{text}</p>
            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                <div className="flex items-center justify-center gap-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p className="text-white text-xl font-medium">{name}</p>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default NavbarLogeado