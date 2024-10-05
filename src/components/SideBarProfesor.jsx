import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que usas React Router para la navegación
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react"; // Usamos íconos de Lucide


const SideNavbar = ({cursoId, moduloId, claseId}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
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
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-50 transform ${
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
            <Link to="/homeProfesor" className="block px-4 py-2 hover:bg-gray-700">
              CURSOS
            </Link>
          </li>
          <li>
            <Link to={`/homeProfesor/${claseId}`} className="block px-4 py-2 hover:bg-gray-700">
              MÓDULOS
            </Link>
          </li>
          <li>
            <Link to="/clases" className="block px-4 py-2 hover:bg-gray-700">
              CLASES
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideNavbar;
