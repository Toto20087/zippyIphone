import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"
import ButtonGrande from "./ButtonGrande"
import { FaLinkedin,FaInstagramSquare,FaFacebookSquare } from "react-icons/fa"
import { IoMdMail } from "react-icons/io";  

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo)
        } else {
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrcSet)
        return () => window.removeEventListener("resize", handleVideoSrcSet)
    }, [])

    useGSAP(() => {
        gsap.to("#hero", {
            opacity: 1,
            delay: 2,
            duration: 1
        })
        gsap.to("#cta", {
            opacity: 1,
            delay: 2,
            duration: 1,
            y: -50
        })
    }, [])

  return (
    <section className='w-full nav-height relative bg-[#0099FF] bg-[url("/deskback.svg")] bg-no-repeat bg-center bg-cover '>
        <div className="h-5/6 w-full flex-center flex-col pb-2">
            <p id="hero" className="hero-title">Hacemos que enseñar Tecnología sea simple.</p>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 gap-y-4">
            <ButtonGrande 
            url="/"
            text="Contactanos!"
            />
            <div className="flex items-center justify-center flex-row space-x-3">
                <FaLinkedin size={30} className="cursor-pointer hover:text-white/80 transition-all" />
                <FaInstagramSquare size={30} className="cursor-pointer hover:text-white/80 transition-all" />
                <FaFacebookSquare size={30} className="cursor-pointer hover:text-white/80 transition-all" />
                <IoMdMail size={30} className="cursor-pointer hover:text-white/80 transition-all" />
            </div>
        </div>
    </section>
  )
}

export default Hero