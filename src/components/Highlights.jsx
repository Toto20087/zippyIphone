import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {

    useGSAP(() => {
        gsap.to("#title", {
            opacity: 1,
            y:0
        })
        gsap.to(".link", {
            opacity: 1,
            y:0,
            duration: 1,
            stagger: 0.25
        })
    })
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
        <div className="screen-max-width">
            <VideoCarousel />
        </div>
    </section>
  )
}

export default Highlights