import { useNavigate } from "react-router-dom";

const ButtonGrande = ({ url, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${url}`);
  };

  return (
    <div
      className="flex text-center items-center justify-center bg-[#33FFD1] cursor-pointer rounded-3xl pt-3 pb-3 pr-16 pl-16 text-lg mr-2 text-[#0099FF] transition-colors duration-200 hover:bg-[#BDFF00]"
      onClick={handleClick} // Cambiado aquí para pasar la referencia
    >
      <p className="decoration-transparent font-semibold">{text}</p>
    </div>
  );
};

export default ButtonGrande;
