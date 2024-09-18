import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import CustomCard from './CardIlustraciones';
import CardAmarilla from './CardAmarilla';
import CardNaranja from './CardNaranja';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className='common-padding bg-[#F5F5F5] flex items-center justify-center flex-col gap-y-10 bg-[url("/bgEjes.png")] bg-no-repeat bg-contain bg-center '>
      <h2 className="hiw-title">
        EJES TEMATICOS
      </h2>
      <div className="screen-max-width flex items-center justify-center flex-col gap-y-5">
        <CustomCard />
        <CardAmarilla />
        <CardNaranja />
      </div>
    </section>
  )
}

export default HowItWorks