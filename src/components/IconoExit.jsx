import { useNavigate } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";

const IconoExit = ({color}) => {

    const navigate = useNavigate();

    const handleExit = () => {
        navigate(-1);
    };

  return (
    <BsBoxArrowLeft color={color} size={30} onClick={handleExit} className="cursor-pointer" />
  )
}

export default IconoExit