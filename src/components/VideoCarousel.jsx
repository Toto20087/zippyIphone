import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";

import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const ImageCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const imageRefs = useRef([]);
  const dotRefs = useRef([]);

  useGSAP(() => {
    // Animate the slider to move images
    gsap.to("#slider", {
      transform: `translateX(${-100 * selectedImage}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [selectedImage]);

  useEffect(() => {
    // Update dot sizes based on the selected image
    dotRefs.current.forEach((dot, i) => {
      gsap.to(dot, {
        scaleX: i === selectedImage ? 2 : 1,
        scaleY: i === selectedImage ? 2 : 1,
        duration: 0.3,
      });
    });
  }, [selectedImage]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "image-end":
        setSelectedImage((prev) => (prev + 1) % hightlightsSlides.length);
        break;
      case "image-reset":
        setSelectedImage(0);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex items-center overflow-hidden">
        <div
          id="slider"
          className="flex"
          style={{ width: `${hightlightsSlides.length * 100}%` }}
        >
          {hightlightsSlides.map((list, i) => (
            <div key={list.id} className="flex-shrink-0 w-full">
              <img
                src={list.image}
                alt={`Slide ${i}`}
                className={`w-full h-auto ${i === selectedImage ? "opacity-100" : "opacity-50"}`}
                onClick={() => handleProcess("image-end", i)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              ref={(el) => (dotRefs.current[i] = el)}
              onClick={() => setSelectedImage(i)}
            />
          ))}
        </div>

        <button className="control-btn">
          <img
            src={selectedImage === hightlightsSlides.length - 1 ? replayImg : pauseImg}
            alt={selectedImage === hightlightsSlides.length - 1 ? "replay" : "pause"}
            onClick={() => handleProcess("image-reset")}
          />
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
