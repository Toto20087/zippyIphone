import React from 'react'
import ClasesCarousel from './ClasesCarousel'
import ClasesCarouselProfesor from './ClasesCarrouselProfesor'

const CarouselSection = () => {
  return (
    <section id="highlights" className="w-screen overflow-hidden h-fit common-padding bg-[#0099FF] ">
        <div className='flex items-center justify-center flex-col mb-5 h-[75vh]  '>
            <h2 className="text-4xl md:text-7xl font-semibold text-center text-white mb-2 ">
                Clases Anteriores
            </h2>
            <ClasesCarousel />
        </div>
        <div className='flex items-center justify-center flex-col mt-5 h-[75vh]'>
            <h2 className="text-4xl md:text-7xl font-semibold text-center text-white mb-2">
                Clases Siguientes
            </h2>
            <ClasesCarouselProfesor /> 
        </div>
    </section>
  )
}

export default CarouselSection