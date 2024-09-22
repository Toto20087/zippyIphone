import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const IconoExit = ({color}) => {

    const navigate = useNavigate(); // Hook de navegación

    // Función para manejar el clic en el icono de salida
    const handleExit = () => {
        navigate(-1); // Regresa a la página anterior
    };

  return (
    <IoMdExit color={color} size={30} onClick={handleExit} className="cursor-pointer" />
  )
}

export default IconoExit