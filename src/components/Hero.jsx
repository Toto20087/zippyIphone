import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useState } from "react"
import { useEffect } from "react"

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
            <p id="hero" className="hero-title">Hacemos que enseñar tecnologia sea simple.</p>
        </div>
        <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
            <a href="#highlights" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero