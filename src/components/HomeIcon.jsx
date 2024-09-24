import { IoMdHome  } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const HomeIcon = ({color}) => {

    const navigate = useNavigate();
    
    const handleExit = () => {
        navigate("/"); 
    };

  return (
    <IoMdHome color={color} size={30} onClick={handleExit} className="cursor-pointer" />
  )
}

export default HomeIcon