import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/animations';
import { explore1Img, explore2Img, exploreVideo } from '../utils';
import gsap from 'gsap';
import CardHorizontal from './CardHorizontal';

const Features = () => {

  return (
    <section className="h-full common-padding bg-[#0099FF] relative overflow-hidden flex items-center justify-center">
      <div className="lg:w-[70%] md:w-[70%] w-full flex items-center justify-center flex-wrap gap-x-10 gap-y-10">
        <CardHorizontal 
        text="Desarrolla Competencias Clave en niños, niñas y jóvenes"
        />
        <CardHorizontal 
        text="Forma Ciudadanos Digitales Responsables"
        />
        <CardHorizontal 
        text="Convierte a tu Escuela en Referente de Innovación"
        />
        <CardHorizontal 
        text="Mantén a tus Docentes Confiados y Motivados"
        />
      </div>
    </section>
  )
}

export default Features