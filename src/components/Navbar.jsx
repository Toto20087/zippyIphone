import ButtonP from "./ButtonPropio"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login")
  }
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-[#0099FF] ">
        <nav className="flex w-full justify-between">
            <img src="/logo.svg" alt="Zippy" width={80} height={80} />
            <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1" onClick={handleClick}>
                <ButtonP 
                text="Ingresa"
                />
            </div>
        </nav>
    </header>
  )
}

export default Navbar