import { useParams } from "react-router-dom"
import IconoExit from "./IconoExit"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NavbarClase = () => {
    const {claseId} = useParams()
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-[#0099FF] fixed top-0 z-99 ">
        <nav className="flex w-full justify-between items-center">
            <div className="flex items-center justify-center gap-x-5">
                <IconoExit />
                <img src="/logo.svg" alt="Zippy" width={80} height={80} />
            </div>
            <p className="text-xl font-semibold">{claseId}</p>
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

export default NavbarClase