import IconoExit from "./IconoExit";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const NavbarCursos = ({curso}) => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-[#F5F5F5] fixed top-0 z-50 ">
        <nav className="flex w-full justify-between items-center">
            <div className="flex items-center justify-center gap-x-8">
                <IconoExit color="000000" />
                <p className="text-black text-3xl font-semibold">{curso}</p>
            </div>
            <div className="flex items-center justify-center gap-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                <p className="text-black text-xl font-medium">Manuel</p>
            </div>
        </nav>
    </header>
  )
}

export default NavbarCursos